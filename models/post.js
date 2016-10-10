const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  title:{
  	type: String,
  	required: true
  },
  description:{
  	type: String
  },
  price:{
  	type: Number
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
  },
  user_id:{
    type: String
  }
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post