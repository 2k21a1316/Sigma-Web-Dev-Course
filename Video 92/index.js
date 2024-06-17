const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//template engine is ejs ,pug,template engine handlebars
app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })//use .render not .sendfile for ejs template engine
})//<%= siteName %> gives value of sitename

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"//hum in variables ko is template me ghusana chahte hai,so use ejs ->template engine
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})