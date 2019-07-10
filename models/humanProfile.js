const mongoose = require('mongoose')

const petProfileSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petAge: { type: Number, required: true },
  petSpecies: { type: String, required: true },
  hobbies: { type: Array, required: true },
  aboutMe: { type: String, required: true },
  image: { type: String, required: true }
})

const humanProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  ownerAge: { type: Number, required: true },
  ownerOccupation: { type: String, required: true },
  image: { type: String, required: true },
  pet: [ petProfileSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
})


humanProfileSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Human', humanProfileSchema, 'Pet', petProfileSchema)
