const express = require('express');
const router = express.Router();

const User = require('../models/User');

const { protect, authorize } = require('../middleware/auth');
const advancedResults = require('../middleware/advancedResults');

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');

router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User), getAllUsers)
  .post(createUser);
router
  .route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
