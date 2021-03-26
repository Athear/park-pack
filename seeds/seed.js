const sequelize = require('../config/connection');
const seedjoinDogActivity = require('./joinDogActivityData')
const seedDog = require('./dogData');
const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedDog();

  await seedjoinDogActivity();

  process.exit(0);
};

seedDatabase();