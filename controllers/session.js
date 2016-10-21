"use strict"
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports.createAPI = (req, res)=> {
  User.findOne({
    email: req.body.email
  }).exec()
  .then((user)=>{
    if (user){
      bcrypt.compare(req.body.password, user.password_digest,(err, result)=>{
        if (result){
          //password matched.
          let webToken = jwt.sign({email: user.email, name: user.name, bio: user.bio, phoneNumber: user.phoneNumber }, "this is secretkey", {expiresIn: 60*60 })
          res.status(200).json({webToken})
        }else{
          res.status(200).json({error: "email or password is incorrect"})
        }
      })
    }else{
      res.status(200).json({error: "user not found"})
    }
  })
  .catch((err)=>{
    res.status(200).json({error: err})
  })
}
