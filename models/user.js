const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  name:{
  	type: String,
  	required: true
  },
  email:{
  	type: String,
  	required: true

  },
  gender:{
    type: String
  },
  password:{
  	type: String,
  	required: true
  },
  passwordConfirmation:{
  	type: String,
  	required: true
  },
  accessToken:{
    type: String
  }
})
// var User = module.exports = mongoose.model('User', userSchema);
module.exports = User = mongoose.model('User', userSchema)
module.exports.registerUser = (params)=>{
  console.log(params)
}