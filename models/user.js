const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 10
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token:  {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

userSchema.methods.comparePassword  = function(plainPassword, cb){
    //plainPassword 1234566, 암호화된 비밀번호
    bcrypt.cpare(plainPassword, this.password, function(err, isMatch){
      cb(null, isMatch)
    })


}


const User = mongoose.model('user, userSchema', userSchema)
module.exports = { User }