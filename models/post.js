"use strict"
const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  title:{
  	type: String,
  	required: true,
    unique: true
  },
  description:{
  	type: String
  },
  price:{
  	type: Number,
    required: true
  },
  obo:{
    type: Boolean
  },
  tag:{
  	type: String
  },
  state:{
  	type: String,
    required: true
  },
  school:{
  	type: String,
    required: true
  },
  condition:{
  	type: String,
    required: true
  },
  category:{
  	type: String,
    required: true
  },
  user_id:{
    type: String,
    required: true
  }
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post
