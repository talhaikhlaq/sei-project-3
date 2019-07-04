const express = require('express')
const mongoose = require('mongoose')
const app = express()
const { dbURI, port } = require('./config/environment')




app.listen(port, () => console.log(`App is listening on port ${port}`))
