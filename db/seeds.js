const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'tal',
          email: 'tal@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'amy',
          email: 'amy@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'kasia',
          email: 'kasia@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'wesleydale',
          email: 'wes@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(users => {
      console.log(`${users.length} users created`)
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
