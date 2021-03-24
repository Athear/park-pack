const { Dog } = require('../models');

const dogData = [
    {
        name : "Teo",
        gender: "M",
        age: 12,
        weight: 14,
        breed: "ShihTzu",
        fixed: true,
        energy: 1,
        user_id: 1,
        pic: ""
    },
    {
        name : "Misty",
        gender: "F",
        age: 12,
        weight: 85,
        breed: "Australian Shepard Mix",
        fixed: true,
        energy: 3,
        user_id: 2,
        pic: ""
    },
    {
        name : "Sugar",
        gender: "F",
        age: 3,
        weight: 79,
        breed: "Pyrenees",
        fixed: true,
        energy: 4,
        user_id: 2,
        pic: ""
    },
    {
        name : "Autumn",
        gender: "F",
        age: 1,
        weight: 8,
        breed: "Havanese",
        fixed: false,
        energy: 4,
        user_id: 3,
        pic: ""
    },
    {
        name : "Manny",
        gender: "M",
        age: 6,
        weight: 22,
        breed: "Chihuahua mix",
        fixed: true,
        energy: 1,
        user_id: 2,
        pic: ""
    },
    {
        name : "Bella",
        gender: "F",
        age: 11,
        weight: 92,
        breed: "Husky",
        fixed: true,
        energy: 2,
        user_id: 4,
        pic: ""
    },
    {
        name : "Willow",
        gender: "F",
        age: 1,
        weight: 36,
        breed: "Pit Bull Mix",
        fixed: true,
        energy: 4,
        user_id: 4,
        pic: ""
    },
    {
        name : "Frank",
        gender: "M",
        age: 3,
        weight: 17,
        breed: "French Bulldog",
        user_id: 5,
        fixed: false,
        energy: 4,
        pic : ""
    },
    {
        name : "Bowie",
        gender: "M",
        age: 2,
        weight: 152,
        breed: "Leonburger",
        fixed: true,
        energy: 2,
        user_id: 6,
        pic: ""
    }

];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;