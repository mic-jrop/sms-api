var express = require('express');
var router = express.Router();
const MessageResponse = require('twilio').twiml.MessagingResponse;
var textSender = require('../app/textSender.js');


/* GET users listing. */
router.post('/', function(req, res, next) {

  const fromNumber = req.body.From;
  const textContent = req.body.Body;
  const timestamp = new Date().toISOString();

  let responseText = "unknown";
  switch(textContent) {
    case 'hello':
      responseText = "Hello there";
      break;
    case 'date':
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
