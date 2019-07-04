const express = require('express')
const mongoose = require('mongoose')
const app = express()
const { dbURI, port } = require('./config/environment')

console.log('Backend is rocking')
app.listen(port, () => console.log(`App is listening on port ${port}`))
