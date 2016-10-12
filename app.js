const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const User = require("./models/User")
const multer = require('multer')
const path = require("path")
const dotenv = require("dotenv")
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
dotenv.load({path: ".env"})
const port = process.env.PORT || 3000

const userController = require("./controllers/user")
const postController = require("./controllers/post")
const sessionController = require("./controllers/session")

mongoose.connect("mongodb://localhost:27017/collegestuffsale")
app.use(bodyParser.json())

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(expressJWT({secret: "this is secretkey"}).unless({path: ['/login','/signup','/api/sessions', '/api/users']}))
app.use((err, req, res, next)=>{
  if (err.name === 'UnauthorizedError') {
    res.json({error: "Unauthorized."})
  }
})
app.use((res, req, next)=>{
  console.log("logged.")
  next()
})
app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/'))
console.log("Server is now running at port "+ port)

app.listen(port)



//API

//GET
app.get("/api/posts", postController.indexAPI)
//POST
app.post("/api/sessions", sessionController.createAPI)
app.post("/api/users", userController.createAPI)







// app.get("/", postController.index)
// app.get("/register", userController.new)
// app.post("/api/user", userController.addUser)