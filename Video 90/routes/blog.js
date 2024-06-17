const express = require('express')
const router = express.Router()

// Middleware is function that is specific to this router,can also used for authentication and login 
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// middle ware follows ordered programming last time change will show 

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router

// middleware types -> application level middleware and router level middleware,error handling middleware ,builtin middleware -static file ko karne ke liye,third party middleware 
// main.js is application level and blog.js is router level 