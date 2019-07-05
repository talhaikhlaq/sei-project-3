const mongoose = require('mongoose')

const humanProfileSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  ownerAge: { type: Number, required: true },
  ownerOccupation: { type: String, required: true },
  pet: [ petProfileSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const petProfileSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petAge: { type: Number, required: true },
  hobbies: { type: Array, required: true },
  aboutMe: { type: String, required: true },
  image: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'Human', required: true }
})


humanProfileSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Human', humanProfileSchema)
