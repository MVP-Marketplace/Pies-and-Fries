const User = require('../db/models/user'),
    {sendWelcomeEmail} = require('../emails/');

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({
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
        res.status(400).json({ error: e.toString() });
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

exports.getCurrentUser = async (req,res) => res.json (req.user);

exports.loginUser = async (req, res) => {}

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