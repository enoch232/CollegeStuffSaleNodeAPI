const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  name:{
  	type: String,
  	required: true
  },
  email:{
  	type: String,
  	required: true,
    unique: true
  },
  gender:{
    type: String
  },
  phoneNumber:{
    type: String
  },
  hideNumber:{
    type: Boolean
  },
  password_digest:{
    type: String,
    required: true
  },
  accessToken:{
    type: String
  }
})
// var User = module.exports = mongoose.model('User', userSchema);

const User = mongoose.model('User', userSchema)
module.exports = User
