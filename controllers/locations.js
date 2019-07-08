const Location = require('../models/location')

// Index all locations
function indexRoute(req, res) {
  Location
    .find(req.body)
    .populate('user')
    .then(locations => res.status(200).json(locations))
    .catch(err => res.status(404).json(err))
}

// Show location
function showRoute (req, res, next) {
  Location
    .findById(req.params.id)
    .populate('user')
    .then(location => {
      if (!location) return res.status(404).json({ message: 'Not Found' })
      return res.status(200).json(location)
    })
    .catch(next)
}

// Create a new location
function createRoute(req, res, next) {
  Location
    .create(req.body)
    .then(locations => res.status(201).json(locations))
    .catch(next)
}

// Edit existing location
function editRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .then(location => {
      if (!location) return res.status(404).json({ message: 'Not Found' })
      Object.assign(location, req.body)
      return location.save()
    })
    .then(location => res.status(202).json(location))
    .catch(next)
}

// Delete profile
function deleteRoute(req, res, next) {
  Location
// <<<<<<< HEAD
//   Location
// =======
// >>>>>>> development
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  indexLocations: indexRoute,
  showLocation: showRoute,
  createLocation: createRoute,
  editLocation: editRoute,
  deleteLocation: deleteRoute
}
