const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
require('dotenv').config()

// Chatkit
const Chatkit = require('@pusher/chatkit-server')
const instanceLocator = process.env.CHATKIT_INSTANCE
const key = process.env.CHATKIT_KEY
console.log('instance env', instanceLocator)
console.log('key env', key)

// REGISTER HANDLER ROUTE
function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {

      // Create Chatkit user
      const chatkit = new Chatkit.default({
        instanceLocator: instanceLocator,
        key: key
      })

      chatkit.createUser({
        id: user._id,
        name: user.username
      })

      res.status(201).json({
        message: `Thanks for registering ${user.username}`
      })
    })
    .catch(next)
}




// LOGIN HANDLER ROUTE
function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '192h' })
      res.status(200).json({
        message: `Welcome back ${user.username }`,
        token
      })
    })
    .catch(next)
}

module.exports = {
  register,
  login
}
