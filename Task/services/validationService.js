exports.validateBankDetails = (accountNumber, sortCode) => {
    // Regular expression for validating UK account number (8 digits)
    const accountRegex = /^\d{8}$/;
    
    // Regular expression for validating UK sort code (format: xx-xx-xx)
    const sortCodeRegex = /^\d{2}-\d{2}-\d{2}$/;

    // Test both the account number and sort code using their respective regex patterns
    return accountRegex.test(accountNumber) && sortCodeRegex.test(sortCode);
};

