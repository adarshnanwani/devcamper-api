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

const { protect, authorize } = require('../middleware/auth');

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
  .post(protect, authorize('publisher', 'admin'), createBootcamp);


router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, authorize('publisher', 'admin'), updateBootcamp)
  .delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

router.route('/:id/photo').put(protect, bootcampPhotoUpload);

module.exports = router;
