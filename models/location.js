const mongoose = require('mongoose')

const commentSchema =  new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false }
} ,{
  timestamps: true
})

const locationSchema =  new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: false },
  address: {
    buildingNumber: { type: String },
    street: { type: String, required: false },
    city: { type: String },
    postcode: { type: String, required: false }
  },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  },
  website: { type: String },
  image: { type: String },
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
})







locationSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Location', locationSchema)
