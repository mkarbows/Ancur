/**
* Import Stampery API for NodeJS
 */
const Stampery = require('stampery');

// Authorization: Basic <base64(cientID + ':' + secret)>

/**
* Please replace this dummy user secret with a real one.
* Sign up and get your own user secret at https://api-dashboard.stampery.com
 */
var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');

/**
* Simple workflow for stamping a string.
* This will return all the data related to the stamp plus an estimation of the
* remaining time in seconds for the Ethereum and Bitcoin receipts to be ready
* for proving. Average ETA is ~30 seconds for ETH and ~5 minutes for BTC.
 */
var h = stampery.hash('the piano has been drinking ' + Math.random());
stampery.stamp(h, function(err, stamp) {
  if (err) {
    return console.error(err);
  }
  return console.log(stamp);
});
