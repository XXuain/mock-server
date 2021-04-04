const express = require('express')
const cors = require('cors')
const app = express()

// routes
const menu = require('./routes/menu')

// app.get('/', function (req, res) {
//   console.log('------', req.headers);
//   res.send('ddd')
// });

// app.get('/example/b', function (req, res, next) {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, function (req, res) {
//   res.status(200)
//   res.send('Hello from B!')
// })


app.use('/menu', menu)

app.use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

module.exports = app;
