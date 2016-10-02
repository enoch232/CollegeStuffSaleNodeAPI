const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
console.log("Server is now running at "+ port)
app.listen(3000)
app.get("/", (req, res)=>{
	res.end("hello world!")
})