const mongoose = require("mongoose")
const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

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
    let webToken = jwt.sign({username: req.body.email}, "this is secretkey")
    res.json({webToken})
  })
  .catch((err)=>{
  	console.log("error while saving user." + err)
  })

}

module.exports.createAPI = function(req, res){
  console.log(req.body)
  let newuser = new User({
    name: req.body.name,
    email: req.body.email,
    password_digest: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  })
  let promise = newuser.save()
  promise.then((user)=>{
    console.log(user)
    let webToken = jwt.sign({user_id: user._id}, "this is secretkey")
    res.status[200].json({webToken})
  })
  .catch((err)=>{
    res.status[200].json({error: err})
  })

}