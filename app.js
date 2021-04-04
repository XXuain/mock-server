const express = require('express')
const cors = require('cors')
const app = express()
const mw = require('./middleware')
const { notFound, onError } = require('./error');

const menu = require('./routes/menu')
const auth = require('./routes/auth')

app.use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(mw())

// routes
app.get('/testError', function(req, res){
  throw { status: 500, message: 'detailed message'};
});

app.use('/menu', menu)
  .use('/auth', auth)

// error
app.use(notFound)
  .use(onError)


module.exports = app;
