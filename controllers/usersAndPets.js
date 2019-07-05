const Human = require('../models/humanProfile')

function indexRoute(req, res) {
  Human
    .find(req.body)
    .then(profiles => res.status(200).json(profiles))
    .catch(err => res.status(404).json(err))
}

module.exports = {
  indexProfiles: indexRoute
}
