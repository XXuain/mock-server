const express = require('express')
const cors = require('cors')
const app = express()
const mw = require('./middleware')

// routes
const menu = require('./routes/menu')

// error
const error = require('./error');


app.use(mw())

app.get('/testError', function(req, res){
  throw { status: 500, message: 'detailed message'};
});

app.use('/menu', menu)

app.use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(error)

module.exports = app;
