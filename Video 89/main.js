const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
 
// browser for client and console is for server 
// sensitive info by post request 
const app = express()
const port = 3000


app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {//this request can check by browser
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {//chained with above function
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {//this request used for to update
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})