var express = require('express');
var router = express.Router();
let User = require('../models').User;

/* GET users listing. */
router.post('/registration', async function(req, res, next) {
 
  const phone = req.body.phone || "";
  const gender = req.body.gender || null;
  const showerPref = req.body.showerPref || "morning";
  const haveBreakfast = req.body.haveBreakfast;
  const haveLunch = req.body.haveLunch;
  const haveDinner = req.body.haveDinner;

  const userDict = {
    phone,
    gender,
    showerPref,
    haveBreakfast,
    haveLunch,
    haveDinner
  };
  
  const user = new User(userDict);
  user.save();

  res.status(200).send(JSON.stringify({status: 'created new user'}));
});

router.post('/:userPhone', async (req, res, next) => {
 
  let user = await User.find({
    phone: req.params.userPhone
  });
  
  console.log("user: ", user);
  
  res.send(JSON.stringify(user));
});

module.exports = router;
