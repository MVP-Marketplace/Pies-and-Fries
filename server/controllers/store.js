const Store = require('../db/models/menuItem')


exports.createItem = async (req, res) => {
  const newItemPost = req.body
  const newItem = new Store(newItemPost)
  try {
    await newItem.save()
    res.status(201).json(newItem);
  } catch (e) {
    res
      .status(400)
      // .json({ error: e.toString(), message: 'Email already exists' });
  }
};

exports.getItems = async (req, res) => {
  try {
    const allItems = await Store.find()
    res.json(allItems);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.updateItem = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'quantity', 'size'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates' });
  try {
    updates.forEach(update => (req.item[update] = req.body[update]));
    await req.item.save();
    res.json(req.item);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Logout a user
// ***********************************************//


// ***********************************************//
// Delete a user
// ***********************************************//
exports.deleteItem = async (req, res) => {
  try {
    await req.item.remove();
    res.json({ message: 'Item deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Reset password for a user
// ***********************************************//
