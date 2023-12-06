console.log("Hello World")

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/register', function (req, res) {
    res.send('Register Page')
  })

app.listen(3000)