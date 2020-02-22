const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: true, msg: 'Show all bootcamps' });
});

router.post('/', (req, res) => {
  res.status(200).json({ status: true, msg: 'Create new bootcamp' });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: `Show  bootcamp ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
