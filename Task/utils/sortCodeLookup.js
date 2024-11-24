exports.lookupSortCode = async (sortCode) => {
    console.log(`Validating sort code: ${sortCode}`);
    // Simulate an external API response
    const validSortCodes = ['12-34-56', '98-76-54'];
    return validSortCodes.includes(sortCode);
  };
  