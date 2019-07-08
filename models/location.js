const mongoose = require('mongoose')


const locationSchema =  new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  address: {
    buildingNumber: { type: String },
    street: { type: String, required: true },
    city: { type: String },
    postcode: { type: String, required: true },
    coordinates: { lat: Number, lng: Number  }
  },
  website: { type: String },
  image: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
})







locationSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Location', locationSchema)
