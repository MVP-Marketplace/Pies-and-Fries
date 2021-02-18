const User = require('../db/models/user'),
    jwt = require('jsonwebtoken'),
    {sendWelcomeEmail} = require('../emails/');

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await new User({
            name,
            email,
            password
        });
        sendWelcomeEmail(user.email, user.name);
        const token = await user.generateAuthToken();
        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'Strict',
            secure: process.env.NODE_ENV !== 'production' ? false:true
        });
        res.status(201).json(user);
    } catch (e) {
        res.status(400).json({ error: e.toString(), message: "Email already exists" });
    }
};


// ***********************************************//
// Login a user
// ***********************************************//
exports.loginUser = async (req, res) => {
    const {email, password } =req.body;
    try{
        const user = await User.findByCredentials(email,password);
        const token = await user.generateAuthToken();
        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'Strict',
            sercure: process.env.NODE_ENV !== 'production' ? false : true 
        });
        res.json(user);
    } catch (e) {
        res.status(400).json ({error: e.toString()});
    }
};
//Authenticated Routes Below

// ***********************************************//
// Get current user
// ***********************************************//

exports.getCurrentUser = async (req,res) => {
    try {
        res.json (req.user);
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    }
}

exports.updateCurrentUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [ 'name', 'email', 'password', 'avatar'];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation)
        return res.status(400).send({ error: 'invalid updates'});
    try {
        updates.forEach((update) => (req.user[update] = req.body[update]));
        await req.user.save();
            res.json(req.user);
    } catch (e) {
        res.status(400).json({ error: e.toString()});
    }
}

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