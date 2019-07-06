const Human = require('../models/humanProfile')

// Index all profiles
function indexRoute(req, res) {
  Human
    .find(req.body)
    .populate('user')
    .then(profiles => res.status(200).json(profiles))
    .catch(err => res.status(404).json(err))
}

// Show all profiles
function showRoute (req, res, next) {
  Human
    .findById(req.params.id)
    .populate('user')
    .then(human => {
      if (!human) return res.status(404).json({ message: 'Not Found' })
      return res.status(200).json(human)
    })
    .catch(next)
}

// Create a new profile
function createRoute(req, res, next) {
  req.body.user = req.currentUser
  Human
    .create(req.body)
    .then(humans => res.status(201).json(humans))
    .catch(next)
}

// Edit existing profile
function editRoute(req, res, next) {
  Human
    .findById(req.params.id)
    .then(human => {
      if (!human) return res.status(404).json({ message: 'Not Found' })
      Object.assign(human, req.body)
      return human.save()
    })
    .then(human => res.status(202).json(human))
    .catch(next)
}

// Delete profile
function deleteRoute(req, res, next) {
  Human
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  indexProfiles: indexRoute,
  showProfile: showRoute,
  createProfile: createRoute,
  editProfile: editRoute,
  deleteProfile: deleteRoute
}
