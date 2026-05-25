const express = require('express');
const router = express.Router();
const {
  subscribe,
  getSubscribers,
  deleteSubscriber
} = require('../controllers/subscriberController');

router.route('/')
  .get(getSubscribers)
  .post(subscribe);

router.route('/:id')
  .delete(deleteSubscriber);

module.exports = router;
