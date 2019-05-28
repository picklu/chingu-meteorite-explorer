const Router = require('express').Router;
const router = new Router();
const controller = require('../controller');

// For test
router.route('/test').get((req, res, next) => {
  res.send('Testing API routes!');
});

// For getting all the searched meteorites
router.route('/get').get(controller.getmeteorites);

// For adding a newly searched meteorite
router.route('/add').post(controller.addmeteorites);

// For stat
router.route('/getstat').get(controller.getStat);

module.exports = router;
