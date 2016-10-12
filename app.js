const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const User = require("./models/User")
const multer = require('multer')
const path = require("path")
const dotenv = require("dotenv")
dotenv.load({path: ".env"})
const port = process.env.PORT || 3000

const userController = require("./controllers/user")
const postController = require("./controllers/post")
const sessionController = require("./controllers/session")

mongoose.connect("mongodb://localhost:27017/collegestuffsale")
app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/'))
console.log("Server is now running at port "+ port)
app.listen(port)



//SERVER RENDERING
//GET
app.get("/", postController.index)
app.get("/login", sessionController.new)
app.get("/signup", userController.new)

//POST
app.post("/sessions", sessionController.create)
app.post("/users", userController.create)

//API

app.post("/api/sessions", sessionController.create)
app.post("/api/users", userController.create)





// app.get("/", postController.index)
// app.get("/register", userController.new)
// app.post("/api/user", userController.addUser)