const { Join_Dog_Activity } = require("../models");

const dogActivityData = [
  {
    activity_id: 1,
    dog_id: 1,
  },
  {
    activity_id: 2,
    dog_id: 1,
  },
  {
    activity_id: 4,
    dog_id: 1,
  },
  {
    activity_id: 1,
    dog_id: 2,
  },
  {
    activity_id: 3,
    dog_id: 2,
  },
  {
    activity_id: 5,
    dog_id: 2,
  },
  {
    activity_id: 6,
    dog_id: 2,
  },
  {
    activity_id: 1,
    dog_id: 3,
  },
  {
    activity_id: 5,
    dog_id: 3,
  },
  {
    activity_id: 8,
    dog_id: 3,
  },
  {
    activity_id: 2,
    dog_id: 4,
  },
  {
    activity_id: 4,
    dog_id: 4,
  },
  {
    activity_id: 7,
    dog_id: 4,
  },
  {
    activity_id: 5,
    dog_id: 4,
  },
  {
    activity_id: 1,
    dog_id: 5,
  },
  {
    activity_id: 2,
    dog_id: 5,
  },
  {
    activity_id: 4,
    dog_id: 5,
  },
  {
    activity_id: 5,
    dog_id: 5,
  },
  {
    activity_id: 6,
    dog_id: 5,
  },
  {
    activity_id: 2,
    dog_id: 6,
  },
  {
    activity_id: 5,
    dog_id: 6,
  },
  {
    activity_id: 8,
    dog_id: 6,
  },
  {
    activity_id: 1,
    dog_id: 7,
  },
  {
    activity_id: 2,
    dog_id: 7,
  },
  {
    activity_id: 3,
    dog_id: 7,
  },
  {
    activity_id: 6,
    dog_id: 7,
  },
  {
    activity_id: 2,
    dog_id: 8,
  },
  {
    activity_id: 4,
    dog_id: 8,
  },
  {
    activity_id: 5,
    dog_id: 8,
  },
  {
    activity_id: 1,
    dog_id: 9,
  },
  {
    activity_id: 4,
    dog_id: 9,
  },
  {
    activity_id: 5,
    dog_id: 9,
  },
  {
    activity_id: 6,
    dog_id: 9,
  },
  {
    activity_id: 7,
    dog_id: 9,
  },
  {
    activity_id: 2,
    dog_id: 10,
  },
  {
    activity_id: 5,
    dog_id: 10,
  },
  {
    activity_id: 6,
    dog_id: 10,
  },
];

const seedjoinDogAcitivty = () => Join_Dog_Activity.bulkCreate(dogActivityData);

module.exports = seedjoinDogAcitivty;
