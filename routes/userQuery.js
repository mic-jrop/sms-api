var express = require('express');
var router = express.Router();
const MessageResponse = require('twilio').twiml.MessagingResponse;
var textSender = require('../app/textSender.js');
const returnSchedule = require('../returnSchedule');

/* GET users listing. */
router.post('/:userPhone', function(req, res, next) {

  const userPhone = req.params.userPhone;
  const textContent = req.body.Body;
  const timestamp = new Date().toISOString();

  let responseText = "unknown";
  switch(textContent) {
    case textContent.toLowerCase() === "hello":
      responseText = `
      Hello there, and welcome to our service. To get a basic needs schedule, text us the closet address to where you are, like this: \n
      \n

      address 1600 Dumbarton Circle'
      `;
      break;
    case textContent.toLowerCase() === 'help':
      responseText = `
      To get a basic needs schedule, text us the closet address to where you are, like this: \n
      \n

      address 1600 Dumbarton Circle'
      `;
    case !!textContent.match(/address.*/g):
      let address = textContent
        .match(/address.*/g)
        .slice(8);
      responseText = returnSchedule(address, userPhone);
    case:
      responseText = new Date().toDateString();
      break;
    default:
      break;
  }

  textSender.sendSMS(fromNumber, responseText);

  res.setHeader('Content-Type', 'application/json');

  const responseString = JSON.stringify({status: 'success'});
  res.status(200).send(responseString);
});

module.exports = router;
