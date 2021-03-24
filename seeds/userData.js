const { User } = require('../models')
const userData = [
    {
      name : "Carolyn",
      email : "Carolyn@hotmail.com",
      password : "password12345",
      gender: "F",
      zip: 55404,
      genpref: true
    },
    {
      name : "Mary",
      email : "marymary@gmail.com",
      password : "password12345",
      gender: "F",
      zip: 55404,
      genpref: true
    },
    {
      name : "Rebecca",
      email : "rebecca@rebecca.com",
      password : "password12345",
      gender : "F",
      zip: 55404,
      genpref: false
    },
    {
      name : "Johnny",
      email : "johnnyg@msn.com",
      password : "password12345",
      gender : "M",
      zip: 55404,
      genpref: false
    },
    {
      name : "Khang",
      email : "khang@khang.com",
      password : "password12345",
      gender : "M",
      zip: 55404,
      genpref: false
    },
    {
      name : "Andrea",
      email : "andrea@andrea.com",
      password : "password12345",
      gender : "F",
      zip: 55404,
      genpref: false
    }
  ];

 const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  module.exports = seedUser;