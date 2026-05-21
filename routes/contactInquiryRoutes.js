const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  markInquiryRead,
  deleteInquiry
} = require('../controllers/contactInquiryController');

router.route('/')
  .get(getInquiries)
  .post(createInquiry);

router.route('/:id/read')
  .patch(markInquiryRead);

router.route('/:id')
  .delete(deleteInquiry);

module.exports = router;
