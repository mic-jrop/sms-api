
var twilio = require('twilio');
var client = new twilio(
  'ACb1b89d289a06bce15c2b972974e7e064',
  '34458bfeaf27b4e6639efe4d6abf8f86'
);
var _ = require('lodash');

module.exports = {
  sendSMS(phoneNumber, body) {
    if (!phoneNumber || !body) {
      console.log(`Error: phoneNumber or body is empty, ${phoneNumber} or ${body}`);
      return;
    }
    client.messages.create({
      body: body,
      to: phoneNumber,
      from: '+14158534357'
    }).then(results => console.log(`results from client.messages.create: ${results}`))
  },
}
