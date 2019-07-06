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
          username: 'steven-parker',
          email: 'steven@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'ruby-charlton',
          email: 'ruby@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'rian-brantle',
          email: 'rian@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'victoria-lancaster',
          email: 'victoria@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'marlon-mcarthur',
          email: 'marlon@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'xanthe-deleon',
          email: 'xanthe@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'devin-parry',
          email: 'devin@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'abu-allen',
          email: 'abu@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'henley-marquez',
          email: 'henley@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          username: 'taha-choi',
          email: 'taha@email',
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
          image: 'https://i.imgur.com/rezP6jv.jpg?1',
          pet: [{
            petName: 'Charming Nuttypants',
            petAge: 2,
            petSpecies: 'Cat',
            hobbies: ['Running, ', 'Drinking water straight from the tap'],
            aboutMe: 'Prefers the term collector rather than hoarder. Likes batting fragile things off tables to hear them smash and currently at war with neighborhood pigeons. ',
            image: 'https://i.imgur.com/Io6f0Eo.jpg?1'
          }],
          user: users[5]
        },
        {
          ownerName: 'Ruby Charlton',
          ownerAge: 30,
          ownerOccupation: '3D Animator',
          image: 'https://i.imgur.com/OtkwJs9.jpg?1',
          pet: [{
            petName: 'Poofy Fluff',
            petAge: 8,
            petSpecies: 'Cat',
            hobbies: ['Jangling Keys Manically '],
            aboutMe: 'Loves bright colors and soft fabrics. Using the litter box is a continuous struggle that is continuously up for debate.',
            image: 'https://i.imgur.com/w0wFWaQ.jpg?1'
          }],
          user: users[6]
        },
        {

          ownerName: 'Rian Brantle',
          ownerAge: 30,
          ownerOccupation: 'Producer',
          image: 'https://i.imgur.com/dQg4fle.jpg?1',
          pet: [{
            petName: 'Dancing Glitterbug',
            petAge: 4,
            petSpecies: 'Dog',
            hobbies: ['Bounding about, ', 'Giving Kisses'],
            aboutMe: 'Greedy eater and stubborn. She was stubborn to house train. Unable to look straight ahead. ',
            image: 'https://i.imgur.com/hyS04HX.jpg?1'
          }],
          user: users[7]
        },
        {
          ownerName: 'Victoria Lancaster',
          ownerAge: 32,
          ownerOccupation: 'Application Analyst',
          image: 'https://i.imgur.com/QOTx7EU.jpg?1',
          pet: [{
            petName: 'Rainy Gooberton',
            petAge: 1,
            petSpecies: 'Dog',
            hobbies: ['Licking faces', 'Being generally excited about everything'],
            aboutMe: 'Rainy jumps alot and she is not at all trained yet. Traded brain cells for friendliness.' ,
            image: 'https://i.imgur.com/4ocv52i.jpg?1'
          }],
          user: users[8]
        },
        {
          ownerName: 'Marlon McArthur',
          ownerAge: 52,
          ownerOccupation: 'Rapid prototyper',
          image: 'https://i.imgur.com/odQdPlw.jpg?1',
          pet: [{
            petName: 'Rueben',
            petAge: 6,
            petSpecies: 'Dog',
            hobbies: ['Treat hunting, ', 'Leaping at the beach'],
            aboutMe: 'I am an intelligent dog but I was difficult to train. A classic wanderer, I often get lost. ',
            image: 'https://i.imgur.com/yX4sQUE.jpg?1'
          }],
          user: users[9]
        },
        {
          ownerName: 'Xanthe Deleon',
          ownerAge: 24,
          ownerOccupation: 'Marine Engineer',
          image: 'https://i.imgur.com/qFtLLUA.jpg?1',
          pet: [{
            petName: 'Insane Chalupa',
            petAge: 10,
            petSpecies: 'Cat',
            hobbies: ['Licking myself, ', 'Licking others'],
            aboutMe: 'I love to stare intently into the distance at absolutely nothing.',
            image: 'https://i.imgur.com/peslsHh.jpg'
          }],
          user: users[10]
        },
        {
          ownerName: 'Devin Parry',
          ownerAge: 49,
          ownerOccupation: 'Safety Inspector',
          image: 'https://i.imgur.com/1j3RhYz.jpg',
          pet: [{
            petName: 'Goob',
            petAge: 8,
            petSpecies: 'Cat',
            hobbies: ['Sleeping, ', 'Curling tail around faces'],
            aboutMe: 'Goob is generally disatisfied with all humans and other animals. Shows general distaste at all times.',
            image: 'https://i.imgur.com/YaZz7nk.jpg?1'
          }],
          user: users[11]
        },
        {
          ownerName: 'Abu Allan',
          ownerAge: 27,
          ownerOccupation: 'Health Psychologist',
          image: 'https://i.imgur.com/FEscsaQ.jpg?1',
          pet: [{
            petName: 'Oracle',
            petAge: 1,
            petSpecies: 'Dog',
            hobbies: ['Barking obsessivly at nothing, ', 'Panting'],
            aboutMe: 'Only loves one person, still wont listen to them.',
            image: 'https://i.imgur.com/MlKDIAA.jpg?1'
          }],
          user: users[12]
        },
        {
          ownerName: 'Henley Marquez',
          ownerAge: 38,
          ownerOccupation: 'Ultrasound Technologist',
          image: 'https://i.imgur.com/J8gtJj2.jpg?1',
          pet: [{
            petName: 'Cuddly Doink',
            petAge: 16,
            petSpecies: 'Cat',
            hobbies: ['Drinking exclusively from the tap, ', 'Sleeping in the sink'],
            aboutMe: 'Will not allow you to brush your teeth or wash your hands.',
            image: 'https://i.imgur.com/lPc079Z.jpg?1'
          }],
          user: users[13]
        },
        {
          ownerName: 'Taha Choi',
          ownerAge: 26,
          ownerOccupation: 'Aircraft Assembler',
          image: 'https://i.imgur.com/MatVya9.jpg?1',
          pet: [{
            petName: 'Squiggly Pete',
            petAge: 5,
            petSpecies: 'Dog',
            hobbies: ['Not being chill ', 'Rubbing butt on carpet'],
            aboutMe: 'Gentle angel baby or neurotic mess, no inbetween.',
            image: 'https://i.imgur.com/kCPyjPb.jpg?1'
          }],
          user: users[14]
        }
      ])
    })
    .then(profiles => console.log(`${profiles.length} profiles created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
