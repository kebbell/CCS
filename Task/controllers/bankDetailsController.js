const validationService = require('../services/validationService');
const notificationService = require('../services/notificationService');

exports.updateBankDetails = async (req, res, next) => {
  try {
    const { merchantId, accountNumber, sortCode } = req.body;

    // Validate input
    const isValid = validationService.validateBankDetails(accountNumber, sortCode);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid bank details' });
    }

    // Mock database update
    console.log(`Updating bank details for merchant ${merchantId}`);

    // Notify merchant
    await notificationService.notifyMerchant(merchantId);

    res.status(200).json({ message: 'Bank details updated successfully' });
  } catch (error) {
    next(error);
  }
};

// Notify the merchant that the bank details have been updated