const User = require("../models/User")
const jwt = require("jsonwebtoken")

module.exports.new = function(req, res){
  res.render("session/login")
}
module.exports.create = function(req, res){
  User.findOne({
  	email: req.body.email
  }).exec()
  .then((user)=>{
  	let webToken = jwt.sign({username: user.email}, "this is secretkey")
    res.json({webToken})
  })
  .catch((err)=>{
  	console.log("error finding user with that email.")
  })
  
}
module.exports.createAPI = function(req, res){
  User.findOne({
    email: req.body.email
  }).exec()
  .then((user)=>{
    let webToken = jwt.sign({user_id: user._id}, "this is secretkey", {expiresIn: "60"})
    console.log(webToken)
    res.status(200).json({webToken})
  })
  .catch((err)=>{
    console.log(err)
    res.status(200).json({error: err})
  })
  
}