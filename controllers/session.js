const User = require("../models/User")

module.exports.new = function(req, res){
  res.render("session/login")
}
module.exports.create = function(req, res){
  User.findOne({
  	email: req.body.email
  }).exec()
  .then((user)=>{
  	console.log(user)
  })
  .catch((err)=>{
  	console.log("error finding user with that email.")
  })
  
}