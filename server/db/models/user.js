const mongoose = require('mongoose'),
validator = require('validator'),
bcrypt = require('bcryptjs'),
jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true,},
    email: {type: String, required: true, trim: true, unique: true, validate(value) {
        if(!validator.isEmail(value)) {
            throw new Error('HEY! thats not a valid email')
        }
    }},
    password: {type: String, required: true, trim: true, validate(value) {
        if(value.toLowerCase().includes('password')) {
            throw new Error("Password can't be password")
        }
        if(value.length < 6) {
            throw new Error('Password must be at least 6 characters long')
        }
    }},
    admin: {type: Boolean, required: true, default: false},
    username: {type: String, required: true,trim: true},    
    number: {type: Number, required: true},
    address: {type: String, required: true},
    order: [String],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

userSchema.methods.toJSON = () => {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}
userSchema.methods.generateAuthToken = async () => {
    const user = this
    const token = jwt.sign(
        {
            _id: user._id.toString(), name: user.name
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    )
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if(!user) throw new Error('Unable to login')
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error('Unable to login')
    return user
}

userSchema.pre('save', async (next) => {
    const user = this
    if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8)
    next()
})

const User = mongoose.model("Users", userSchema)

module.exports = User