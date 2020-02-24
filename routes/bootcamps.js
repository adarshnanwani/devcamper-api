const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require('../controllers/bootcamps');
const advancedResults = require('../middleware/advancedResults');
const Bootcamp = require('../models/Bootcamp');

// Include other resource routers
const courseRouter = require('./courses');

const router = express.Router();

//Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance/:unit').get(getBootcampsInRadius);

router
  .route('/')
  .get(
    advancedResults(Bootcamp, 'courses', {
      path: 'bootcamp',
      select: 'name description'
    }),
    getBootcamps
  )
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

router.route('/:id/photo').put(bootcampPhotoUpload);

module.exports = router;
