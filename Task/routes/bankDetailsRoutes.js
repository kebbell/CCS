const express = require('express');
const { updateBankDetails } = require('../controllers/bankDetailsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/update', authMiddleware, updateBankDetails);

module.exports = router;
