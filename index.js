const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const { dbURI, port } = require('./config/environment')
const routerAmy = require('./config/routerAmy')
const logger = require('./lib/logger')
// const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })

app.use(bodyParser.json())

app.use(logger)

// Remember to revert back to router!!!!!!
app.use('/api', routerAmy)

// app.use(errorHandler)

console.log('Backend is rocking')
app.listen(port, () => console.log(`App is listening on port ${port}`))
