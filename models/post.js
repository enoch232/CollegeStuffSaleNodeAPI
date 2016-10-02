const mongoose = require("mongoose")
const User = require("./user")
const postSchema = new mongoose.Schema({
  email:{
  	type: String,
  	unique: true
  },
  title:{
  	type: String,
  	required: true
  },
  description:{
  	type: Text
  },
  price:{
  	type: decimal
  },
  tag:{
  	type: String
  },
  state:{
  	type: String
  },
  school:{
  	type: String
  },
  condition:{
  	type: String
  },
  category:{
  	type: String
  }
})

module.exports = Post = mongoose.model("Post", postSchema)