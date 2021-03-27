const { User } = require('../models')
const userData = [
    {
      first_name : "Carolyn",
      last_name : "Hilpisch",
      email : "Carolyn@hotmail.com",
      password : "password12345",
      gender: "F",
      zip: 55102,
      genpref: true
    },
    {
      first_name : "Mary",
      last_name : "Contrary",
      email : "marymary@gmail.com",
      password : "password12345",
      gender: "F",
      zip: 55104,
      genpref: true
    },
    {
      first_name : "Rebecca",
      last_name : "Noorgard",
      email : "rebecca@rebecca.com",
      password : "password12345",
      gender : "F",
      zip: 55410,
      genpref: false
    },
    {
      first_name : "Johnny",
      last_name : "Five",
      email : "johnnyg@msn.com",
      password : "password12345",
      gender : "M",
      zip: 55016,
      genpref: false
    },
    {
     first_name : "Khang",
     last_name : "Mystery",
      email : "khang@khang.com",
      password : "password12345",
      gender : "M",
      zip: 55406,
      genpref: false
    },
    {
      first_name : "Andrea",
      last_name : "Banandrea",
      email : "andrea@andrea.com",
      password : "password12345",
      gender : "F",
      zip: 55401,
      genpref: false
    },
    {
      first_name : "Jennifer",
      last_name : "Nelson",
      email : "jennifer@jennifer.com",
      password : "password12345",
      gender : "F",
      zip: 55404,
      genpref: false
    },
    {
      first_name : "Markki",
      last_name : "Meyer",
      email : "markki@markki.com",
      password : "password12345",
      gender : "F",
      zip: 55423,
      genpref: false
    },
    {
      first_name : "Todd",
      last_name : "Malone",
      email : "todd@todd.com",
      password : "password12345",
      gender : "M",
      zip: 55450,
      genpref: false
    },
    {
      first_name : "Nate",
      last_name : "Perfetti",
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