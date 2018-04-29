
var twilio = require('twilio');
var client = new twilio(process.env.twilioAccountSid, process.env.twilioAuthToken);
var _ = require('lodash');

module.exports = {
  sendSMS(phoneNumber, body) {
    if (!phoneNumber || !body) {
      console.log("Error: phoneNumber or body is empty");
      return;
    }

    client.messages.create({
      body: body,
      to: phoneNumber,
      from: '+15083068327'
    })
    .then((message) => {

    });
  },
}
