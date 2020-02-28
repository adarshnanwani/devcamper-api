const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { updateDetails } = require('../controllers/users');

router.route('/').put(protect, updateDetails);

module.exports = router;
