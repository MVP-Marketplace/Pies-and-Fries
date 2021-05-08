const mongoose = require('mongoose'),
    validator = require('validator'),
    bcrypt = require('bcryptjs'),
    uniqueValidator = require('mongoose-unique-validator')
    jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
    name: {type: String, required: true, trim: true},
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
    admin: {type: Boolean, default: false},
    driver: {type: Boolean, default: false},
    number: {type: Number, default: null},
    delivery_address: {type: String, default:null},
    delivery_line_2: {type: Boolean, default: null},
    delivery_city: {type: String, default: null},
    delivery_state: {type:String, default: null},
    delivery_zip_code: {type:String, default: null},
    billing_address:{type:String, default: null},
    billing_line_2:{type:String, default: null},
    billing_zip_code:{type:Number, default: null},
    billing_state:{type:String, default: null},
    default_tip: {type: Number, default: 10},
    card_number:{type:Number, default: null},
    card_exp:{type:String, default: null},
    cvv:{type:Number, default: null},
    order: [String],
    tokens: [
        {
            token: {
                type: String, 
                required: true
            }
        }
    ]
});

userSchema.plugin(uniqueValidator)

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
};
userSchema.methods.generateAuthToken = async function () {
    try{
    const user = this;
    const token = jwt.sign(
        {
            _id: user._id.toString(), 
            name: user.name,
            admin: user.admin
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
    } catch (e) {
        res.status(400).json({ error: e.toString() });
    };
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if(!user) throw new Error('Unable to login')
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error('Unable to login')
    return user
}

userSchema.pre('save', async function (next) {
    try{
    const user = this
    if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8)
    next()
    } catch (e) {
        res.status(400).json({ error: e.toString() })
    };
});

const User = mongoose.model("User", userSchema)

module.exports = User