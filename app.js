const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
const mongoose = require("mongoose")
const User = require("./models/User")

const userController = require("./controllers/user")
const postController = require("./controllers/post")

mongoose.connect("mongodb://localhost:27017/collegestuffsale");
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.set('views', __dirname + "/views/");
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
console.log("Server is now running at port "+ port)
app.listen(port)

app.get("/", postController.index)
app.get("/register", userController.addUser)