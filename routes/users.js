var express = require('express');
var router = express.Router();
let User = require('../models').User;

/* GET users listing. */
router.post('/registration', function(req, res, next) {
 
  const phone = req.body.phone || "";
  const gender = req.body.gender || "unknown";
  const age = req.body.age || "";
  const showerPref = req.body.showerPref || "morning";

  const userDict = {
    phone,
    gender,
    age,
    showerPref
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
