const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Human = require('../models/humanProfiles')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) console.log(err)
  db.dropDatebase()
    // .then(() => {
    //   return User.create([
    //
    //   ])
    // })
    .then(users => {
      console.log(`${users.length} users created`)
      return Human.create([
        {
          ownerName: 'Steven Parker',
          ownerAge: 28,
          ownerOccupation: 'Lawyer',
          pet: [{
            petName: 'Charming Nuttypants',
            petAge: 2,
            hobbies: ['Running, ', 'Drinking water straight from the tap, '],
            aboutMe: '',
            image: ''
          }],
          user: users[0]
        }
      ])
    })
})
