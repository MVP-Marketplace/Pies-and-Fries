const User = require('../db/models/user'),
  jwt = require('jsonwebtoken'),
  { sendWelcomeEmail, sendCancellationEmail, forgotPasswordEmail } = require('../emails/');

exports.createUser = async (req, res) => {
  const { name, email, password, number, billing_address, billing_line_2, billing_city,billing_state, billing_zip_code, card_number, card_exp,cvv,delivery_address, delivery_city,delivery_line_2,delivery_state,delivery_zip_code } = req.body;
  console.log(req.body)
  try {
    const user = await new User({
      name: name, 
      email:email, 
      password:password, 
      number:number,
      delivery_address: delivery_address,
      delivery_line_2: delivery_line_2,
      delivery_city: delivery_city,
      delivery_state: delivery_state,
      delivery_zip_code: delivery_zip_code,
      billing_address: billing_address,
      billing_line_2: billing_line_2,
      billing_city: billing_city,
      billing_state:billing_state,
      billing_zip_code: billing_zip_code,
      card_number: card_number,
      card_exp: card_exp,
      cvv: cvv
      
    });
    console.log('user', user)
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true,
    });
    res.status(201).json(user);
  } catch (e) {
    res
      .status(400)
      // .json({ error: e.toString(), message: 'Email already exists' });
  }
};

// ***********************************************//
// Login a user
// ***********************************************//
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    // console.log(user)
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      sercure: process.env.NODE_ENV !== 'production' ? false : true,
    });
   
    // res.send({user})
   
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
//Authenticated Routes Below

// ***********************************************//
// Get current user
// ***********************************************//

exports.getCurrentUser = async (req, res) => {
  try {
    // console.log('user', req.user)
    // console.log(req.user._id)
    const user =await User.findById(req.user._id).populate({path: 'order', options:{sort:{'createdAt': -1}}}).exec()

    // console.log('user', user)
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'avatar'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates' });
  try {
    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Logout a user
// ***********************************************//
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.logoutAllDevices = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'All devices logged out' });
  } catch (e) {
    res.status(500).send();
  }
};

// ***********************************************//
// Delete a user
// ***********************************************//
exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'User deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Reset password for a user
// ***********************************************//
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body,
      user = await User.findOne({ email });
    if (!user) throw new Error("account doesn't exist");
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m',
      }
    );
    //check token parameter
    forgotPasswordEmail(user.email, token, user.name,);
    res.json({ message: 'reset password email sent' });
  } catch (err) {
    res.json({ error: err.toString() });
  }
};

exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict',
    });
    res.redirect(process.env.URL + `/updated-password`);
  } catch (err) {
    res.json({ error: err.toString() });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (err) {
    res.json({ error: e.toString() });
  }
};
