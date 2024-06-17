const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))//request aati hai to pehle yaha aayegi reqest match hogi and then response karegi and niche nhi jayegi otherwise niche wale code pe chali jayegi
// middleware modify the request 
app.use('/blog', blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)//response in console
    req.harry = "I am harry bhai";//response on dom //yaha mene response kar diya hai to request ka control aage nhi jayega ,next ka use karne pe bhi nhi jayega
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {//next mean next middleware , handler,request sab ke paas jayegi jaha next likha hai ,and tab tak jayegi jab tak response nhi milta 
    console.log('m2')
    req.harry = "I am Rohan bhai";
    next()
})

app.get('/', (req, res) => {//handler
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})