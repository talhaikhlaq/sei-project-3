const router = require('express').Router()
const users = require('../controllers/auth')
// const secureRoute = require('../lib/secureRoute')
const profiles = require('../controllers/usersAndPets')
<<<<<<< HEAD
const locations  = require('../controllers/locations')
=======
const locations = require('../controllers/locations')
>>>>>>> development

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/profiles')
  .get(profiles.indexProfiles)
  .post(profiles.createProfile)

router.route('/profiles/:id')
  .get(profiles.showProfile)
  .put(profiles.editProfile)
  .delete(profiles.deleteProfile)

<<<<<<< HEAD

=======
>>>>>>> development
router.route('/locations')
  .get(locations.indexLocations)
  .post(locations.createLocation)

router.route('/locations/:id')
  .get(locations.showLocation)
  .put(locations.editLocation)
  .delete(locations.deleteLocation)

<<<<<<< HEAD
=======



>>>>>>> development
module.exports = router
