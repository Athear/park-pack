const sequelize = require("../config/connection");
const seedjoinDogActivity = require("./joinDogActivity");
const seedDog = require("./dogData");
const seedUser = require("./userData");
const seedActivity = require("./activityData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedDog();

  await seedActivity();

  await seedjoinDogActivity();

  process.exit(0);
};

seedDatabase();
