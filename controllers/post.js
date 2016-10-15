"use strict"
const Post = require("../models/Post")

module.exports.indexAPI = function(req, res){
	Post.find().exec()
	.then((posts)=>{
		res.status(200).json({posts: posts})
	})
	.catch((err)=>{
		res.status(200).json({error: err})
	})
}
