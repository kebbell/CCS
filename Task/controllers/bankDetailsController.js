// Controller for updating bank details
//
// Handles validation of input, validation of sort code against external API,
// updating in the database, and sending a notification to the merchant

const validationService = require('../services/validationService');
const notificationService = require('../services/notificationService');
const databaseService = require('../services/databaseService');
const sortCodeLookup = require('../utils/sortCodeLookup');

exports.updateBankDetails = async (req, res, next) => {
  try {
    const { merchantId, accountNumber, sortCode } = req.body;

    // Validate input
    const isValid = validationService.validateBankDetails(accountNumber, sortCode);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid bank details' });
    }

    // Validate sort code with external API
    const isSortCodeValid = await sortCodeLookup.lookupSortCode(sortCode);
    if (!isSortCodeValid) {
      return res.status(400).json({ error: 'Invalid sort code' });
    }

    // Update in the database
    const updateResult = await databaseService.updateBankDetails(merchantId, accountNumber, sortCode);
    if (updateResult.status === 'duplicate') {
      return res.status(200).json({ message: updateResult.message });
    }

    // Notify merchant
    await notificationService.notifyMerchant(merchantId);

    res.status(200).json({ message: 'Bank details updated successfully' });
  } catch (error) {
    next(error);
  }
};

