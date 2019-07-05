const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const { dbURI, port } = require('./config/environment')
const router = require('./config/router')
const logger = require('./lib/logger')
const errorHandler = require('./lib/errorHandlers')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

console.log('Backend is rocking')
app.listen(port, () => console.log(`App is listening on port ${port}`))
