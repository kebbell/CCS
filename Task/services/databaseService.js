const mockDatabase = new Map();

exports.updateBankDetails = async (merchantId, accountNumber, sortCode) => {
  if (mockDatabase.has(merchantId)) {
    const existing = mockDatabase.get(merchantId);
    if (existing.accountNumber === accountNumber && existing.sortCode === sortCode) {
      return { status: 'duplicate', message: 'Details already up-to-date' };
    }
  }

  mockDatabase.set(merchantId, { accountNumber, sortCode });
  return { status: 'success', message: 'Bank details updated' };
};
