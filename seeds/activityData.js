const { Activity } = require("../models");
const activityData = [
  {
    activity: "Hiking",
  },
  {
    activity: "Leisurely Walks",
  },
  {
    activity: "Frisbee",
  },
  {
    activity: "Squeaky Toys",
  },
  {
    activity: "Small-dog friendly",
  },
  {
    activity: "Big-dog friendly",
  },
  {
    activity: "Child friendly",
  },
  {
    activity: "Fetch",
  },
];

const seedActivity = () =>
  Activity.bulkCreate(activityData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedActivity;
