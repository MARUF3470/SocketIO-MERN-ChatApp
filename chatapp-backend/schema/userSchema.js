const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
    }
}, {
    timestamps: true
})

//to check if the password is correct or not before login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
// before saving the user to our database it going to encypt the password
userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }
    const sult = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, sult)
})

const User = mongoose.model('User', userSchema)


module.exports = User;
