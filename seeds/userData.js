const { User } = require('../models')
const userData = [
    {
      name : "Carolyn",
      email : "Carolyn@hotmail.com",
      password : "password12345",
      gender: "F",
      zip: 55102,
      genpref: true
    },
    {
      name : "Mary",
      email : "marymary@gmail.com",
      password : "password12345",
      gender: "F",
      zip: 55104,
      genpref: true
    },
    {
      name : "Rebecca",
      email : "rebecca@rebecca.com",
      password : "password12345",
      gender : "F",
      zip: 55410,
      genpref: false
    },
    {
      name : "Johnny",
      email : "johnnyg@msn.com",
      password : "password12345",
      gender : "M",
      zip: 55016,
      genpref: false
    },
    {
      name : "Khang",
      email : "khang@khang.com",
      password : "password12345",
      gender : "M",
      zip: 55406,
      genpref: false
    },
    {
      name : "Andrea",
      email : "andrea@andrea.com",
      password : "password12345",
      gender : "F",
      zip: 55401,
      genpref: false
    },
    {
      name : "Jennifer",
      email : "jennifer@jennifer.com",
      password : "password12345",
      gender : "F",
      zip: 55404,
      genpref: false
    },
    {
      name : "Markki",
      email : "markki@markki.com",
      password : "password12345",
      gender : "F",
      zip: 55423,
      genpref: false
    },
    {
      name : "Todd",
      email : "todd@todd.com",
      password : "password12345",
      gender : "M",
      zip: 55450,
      genpref: false
    },
    {
      name : "Nate",
      email : "nate@nate.com",
      password : "password12345",
      gender : "M",
      zip: 55420,
      genpref: false
    }
  ];

 const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  module.exports = seedUser;