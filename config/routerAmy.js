const router = require('express').Router()
const profiles = require('../controllers/usersAndPets')

router.route('/profiles')
  .get(profiles.indexProfiles)


module.exports = router
