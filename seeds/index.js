const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('../models');
const User = models.User;
const faker = require('faker');

const mongodbUrl = 'mongodb://localhost/homeless_sms_development';

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const users = [];

    for (let i = 0; i < 10; i++) {
      const user = new User({
        phone: faker.phone.phoneNumber(),
      });
      users.push(user);
    }

    const promises = [];
    const collections = [users];
   
    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);
  }
});
