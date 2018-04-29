var express = require('express');
var router = express.Router();
let User = require('../models').User;

/* GET users listing. */
router.post('/registration', function(req, res, next) {
 
  const phone = req.body.phone || "";
  const gender = req.body.gender || "unknown";
  const showerPref = req.body.showerPref || "morning";
  const breakfast = req.body.breakfast;
  const lunch = req.body.lunch;
  const dinner = req.body.dinner;

  const userDict = {
    phone,
    gender,
    showerPref,
    breakfast,
    lunch,
    dinner
  }
  
  const user = new User(userDict);
  user.save();

  res.status(200).send(JSON.stringify({status: 'created new user'}));
});

router.post('/:userPhone', (req, res, next) => {
 
  let user = await User.find({
    phone: req.params.userPhone
  });
  
  console.log("user: ", user);
  
  res.send(JSON.stringify(user));
});


module.exports = router;
