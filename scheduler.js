const axios = require('axios');
const User = require('mongoose').User;

class Node {
  constructor(obj) {
    this.data = obj;
    left = null;
    right = null;
  }
}

// breakfast lunch dinner hard-coded at 7:00 12:00 and 17:00

let breakfast = Node({
  name: "breakfast",
  startTime: 7, 
  endTime: 8,
});
let lunch = Node({
  name: "lunch",
  startTime: 12, 
  endTime: 2,
});
let dinner = Node({
  name: "dinner",
  startTime: 17, 
  endTime: 19,
});



class Schedule {
  constructor() {}

  getSchedule() {

    return 
  }

}

const queue = [
  
];

const returnSchedule = async (address, phone) => {
  // Fetch user from database
  let user = await User.find({
    phone
  })

  // return breakfast

  let defaultSchedule = {
    
  }

  return {};
}

module.exports = returnSchedule;


// Fetch user corresponding
