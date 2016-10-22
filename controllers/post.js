"use strict"
const Post = require("../models/post")


module.exports.indexAPI = function(req, res){
	Post.find().exec()
	.then((posts)=>{
		res.status(200).json({posts: posts})
	})
	.catch((err)=>{
		res.status(403).json({error: err})
	})
}
module.exports.createAPI = (req, res)=>{
	let newPost = new Post({
		title: req.body.postTitle,
		description: req.body.postDescription,
		price: req.body.postPrice,
		obo: req.body.postOBO,
		state: req.body.postState,
		school: req.body.postSchool,
		category: req.body.postCategory,
		condition: req.body.postCondition,
		user_id: req.body.userID
	})
	console.log(newPost)
	newPost.save()
	.then((post)=>{
		res.status(200).json({post: post})
	})
	.catch((err)=>{
		console.log(err)
		res.status(403).json({error: err})
	})
}
