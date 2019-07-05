const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Human = require('../models/humanProfile')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) console.log(err)
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
        }, {
          username: 'jack',
          email: 'jack@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
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
            petSpecies: 'Cat',
            hobbies: ['Running, ', 'Drinking water straight from the tap'],
            aboutMe: 'Prefers the term collector rather than hoarder. Likes batting fragile things off tables to hear them smash and currently at war with neighborhood pigeons. ',
            image: 'https://i.imgur.com/Io6f0Eo.jpg?1'
          }],
          user: users[0]
        },
        {
          ownerName: 'Ruby Charlton',
          ownerAge: 35,
          ownerOccupation: '3D Animator',
          pet: [{
            petName: 'Poofy Fluff',
            petAge: 8,
            petSpecies: 'Cat',
            hobbies: ['Jangling Keys Manically '],
            aboutMe: 'Loves bright colors and soft fabrics. Using the litter box is a continuous struggle that is continuously up for debate.',
            image: 'https://i.imgur.com/w0wFWaQ.jpg?1'
          }],
          user: users[1]
        },
        {

          ownerName: 'Rian Brantle',
          ownerAge: 30,
          ownerOccupation: 'Producer',
          pet: [{
            petName: 'Dancing Glitterbug',
            petAge: 4,
            petSpecies: 'Dog',
            hobbies: ['Bounding about, ', 'Giving Kisses'],
            aboutMe: 'Greedy eater and stubborn. I was stubborn to house train. Unable to look straight ahead. ',
            image: 'https://i.imgur.com/hyS04HX.jpg?1'
          }],
          user: users[2]
        },
        {
          ownerName: 'Victoria Lancaster',
          ownerAge: 42,
          ownerOccupation: 'Application Analyst',
          pet: [{
            petName: 'Rainy Gooberton',
            petAge: 12,
            petSpecies: 'Dog',
            hobbies: ['Bounding about, ', 'Giving Kisses'],
            aboutMe: 'Greedy eater and stubborn. I was stubborn to house train. Unable to look straight ahead. ',
            image: 'https://i.imgur.com/hyS04HX.jpg?1'
          }],
          user: users[3]
        }
      ])
    })
    .then(profiles => console.log(`${profiles.length} profiles created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
