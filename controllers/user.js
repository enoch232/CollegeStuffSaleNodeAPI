const mongoose = require("mongoose")
const User = require("../models/User");
const bcrypt = require('bcrypt')

module.exports.new = function(req, res){
  res.render("user/new")
} 
module.exports.create = function(req, res){
  console.log(req.body)
  let newuser = new User({
  	name: req.body.name,
  	email: req.body.email,
  	password_digest: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  })
  let promise = newuser.save()
  promise.then((user)=>{
  	console.log(user)
  	res.redirect("post/dashboard")
  })
  .catch((err)=>{
  	console.log("error while saving user." + err)
  })

}