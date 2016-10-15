"use strict"
const mongoose = require("mongoose")
const User = require("../models/user");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


module.exports.createAPI = function(req, res){
  if (req.body.password == req.body.password_confirmation){
    let newuser = new User({
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
      phoneNumber: req.body.phone_number,
      gender: req.body.gender,
      hideNumber: req.body.hideNumber,
    })
    bcrypt.genSalt(10, function(err, salt) {
      if (err){
        console.log("error while callback to salt.")
      }else{
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          console.log("created password")
          if (err){
            console.log("error while call back to hash")
          }else{
            newuser.password_digest = hash
            newuser.save()
            .then((user)=>{
              console.log(user)
              let webToken = jwt.sign({user_id: user._id}, "this is secretkey", {expiresIn: 60})
              res.status(200).json({webToken})
            })
            .catch((err)=>{
              console.log(err)
              res.status(200).json({error: err})
            })
          }

        })
      }
    })
  }else{
    res.status(200).json({"error":"Password confirmation does not match password."})
  }
}
