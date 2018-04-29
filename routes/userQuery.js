const express = require('express');
const router = express.Router();
const MessageResponse = require('twilio').twiml.MessagingResponse;
const textSender = require('../app/textSender.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  const userPhone = req.body.From;
  const textContent = req.body.Body;

  let responseText = `
      To get a basic needs schedule, text us the address closest to where you are, like this:\n
      1600 Dumbarton Circle
      `;
  switch (textContent.toLowerCase()) {
    case 'hello':
      responseText = `
      Hello there, and welcome to our service. To get a basic needs schedule, text us the closest address to where you are, like this:\n
      1600 Dumbarton Circle
      `;
      break;
    case 'help':
      responseText = `
      We'd be happy to give you a call if you would like some assistance. Just text back with:\n
      Give me a call
      `;
    case `140 turk st`:
      responseText = `(1) Breakfast: 8am - 9am\nTenderloin Services\n330 Ellis Street, San Francisco, CA 94102\n\n(2) Lunch: 11:30 to 1:30 pm\nSt. Anthony's Dining Room\n121 Golden Gate Avenue San Francisco, CA 94102\n\n(3) Showers: Episcopal Community Services\n24-hour shelter for adults (334 beds with separate sections for men and women) 2 meals daily (breakfast and dinner) Showers Laundry services (detergent not provided) Nurse Monday-Friday Free wifi Case manager to assist with locating housing and obtaining medical\n\n(4) Dinner:  5pm - 7pm\nMother Brown's Dining Room\n2111 Jennings St, San Francisco, CA 94124`;
    default:
      break;
  }

  textSender.sendSMS(userPhone, responseText);

  res.setHeader('Content-Type', 'application/json');

  const responseString = JSON.stringify({status: 'success'});
  res.status(200).send(responseString);
});

module.exports = router;
