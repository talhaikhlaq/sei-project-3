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
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next)
}


function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Location
    .findById(req.params.id)
    .then(location => {
      if (!location) return res.status(404).json({ message: 'Not found' })
      location.comments.push(req.body)
      return location.save()
    })
    .then(location => res.status(201).json(location))
    .catch(next)
}


function commentDeleteRoute(req, res, next) {
  Location
    .findById(req.params.id)
    .then(location => {
      if (!location) return res.status(404).json({ message: 'Not found' })
      const comment = location.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not found' })
      // if (!comment.user.equals(req.currentUser._id)) return res.status(404).json({ message: 'Not found' })
      comment.remove()
      return location.save()
    })
    .then(location => res.status(200).json(location))
    .catch(next)
}


module.exports = {
  indexLocations: indexRoute,
  showLocation: showRoute,
  createLocation: createRoute,
  editLocation: editRoute,
  deleteLocation: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
