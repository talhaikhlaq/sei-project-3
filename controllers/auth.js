const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// Chatkit
const Chatkit = require('@pusher/chatkit-server')
const instanceLocator = 'v1:us1:8a39e96d-aa83-484a-b425-a7abc05dfa51'
const key = '1d94c279-dc4d-4097-8260-cf8ba941f686:agv7drAR4w+N9U9ALQs0KxOLgsh3EVY8nUuF5yGT9NE='

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
