const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
const User = require("./models/user")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/nodegallery");
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.set('views', __dirname + "/");
app.use(express.static('public'));

console.log("Server is now running at port "+ port)
app.listen(port)



//POST /authenticate
app.post("/authenticate", (req, res)=>{
	User.registerUser(req.body)
})
