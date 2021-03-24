const sequelize = require('../config/connection');
const { User } = require('../models');
const { Dog } = require('../models');

const userData = require('./userData');
const dogData = require('./dogData');
const seedDog = require('./dogData');
const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedDog();

  process.exit(0);
};

seedDatabase();