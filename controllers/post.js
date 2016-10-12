const Post = require("../models/Post")

module.exports.index = function(req, res){
	res.render("post/index")
} 
module.exports.indexAPI = function(req, res){
	Post.find().exec()
	.then((posts)=>{
		res.status(200).json({posts: posts})
	})
	.catch((err)=>{
		res.status(200).json({error: err})
	})
}