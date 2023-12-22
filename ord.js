const ordinalsbot = require('ordinalsbot');

// if no parameter given, default environment is 'live'
// API_KEY only required for creating collection orders
ordinalsbot.setCredentials('apikey'); 

module.exports =  async function (text, recAddr) {
  try {
    const order = await ordinalsbot.createTextOrder({
      texts: [text],
      fee:50,
      receiveAddress: recAddr,
    });
    return order;
  } catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
} 