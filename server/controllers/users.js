const User = require('../db/models/user');

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({
            name,
            email
        })
    }
}