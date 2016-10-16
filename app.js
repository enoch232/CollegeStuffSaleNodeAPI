"use strict"
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const multer = require('multer')
const path = require("path")
const dotenv = require("dotenv")
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const reactView = require('express-react-views')

const userController = require("./controllers/user")
const postController = require("./controllers/post")
const sessionController = require("./controllers/session")
const homeController = require("./controllers/home")

dotenv.load({path: ".env"})
const port = process.env.PORT || 3000

mongoose.connect(process.env.PROD_MONGODB_URI)
app.use(bodyParser.json())

app.set('views', path.join(__dirname, path.join('app','views')))
// app.set('view engine', 'jsx')
// app.engine('jsx', reactView.createEngine())
app.set('view engine','ejs')
// app.use(function(req, res, next) {
// 	console.log(req.method)
//     if ('OPTIONS' == req.method) {
//       res.header('Access-Control-Allow-Origin', 'http://www.collegestuffsale.com,http://collegestuffsale.com');
//       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//       res.send(200);
//     }
//     else {
//       next();
//     }
// })

const forDev = ['/new-post','/aboutus']
const removeAuthenticationArray = ['/signin','/signup','/api/sessions', '/api/users','/',/(assets\/)/].concat(forDev)

app.use(expressJWT({secret: "this is secretkey"}).unless({path: removeAuthenticationArray}))
app.use((err, req, res, next)=>{
  if (err.name === 'UnauthorizedError') {
    res.json({error: "Unauthorized."})
  }
})
app.use((req, res, next)=>{
  console.log(req.method+ " "+ req.url)
  next()
})
app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/'))
console.log("Server is now running at port "+ port)

app.listen(port)
//Routes
// app.get('/', homeController.index)
// app.get('/signup', homeController.signup)


//API

//GET
app.get("/api/posts", postController.indexAPI)
//POST
app.post("/api/sessions", sessionController.createAPI)
app.post("/api/users", userController.createAPI)

app.get('/*', function (req, res){
  res.render('index')
})




// app.get("/", postController.index)
// app.get("/register", userController.new)
// app.post("/api/user", userController.addUser)
