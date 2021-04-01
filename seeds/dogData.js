const { Dog } = require('../models');

const dogData = [
    {
        name : "Teo",
        gender: "Male",
        age: 12,
        weight: 14,
        breed: "ShihTzu",
        fixed: "Yes",
        energy: 1,
        user_id: 1,
        pic: ""
    },
    {
        name : "Misty",
        gender: "Female",
        age: 12,
        weight: 85,
        breed: "Australian Shepard Mix",
        fixed: "Yes",
        energy: 3,
        user_id: 2,
        pic: ""
    },
    {
        name : "Sugar",
        gender: "Female",
        age: 3,
        weight: 79,
        breed: "Pyrenees",
        fixed: "Yes",
        energy: 4,
        user_id: 3,
        pic: ""
    },
    {
        name : "Autumn",
        gender: "Female",
        age: 1,
        weight: 8,
        breed: "Havanese",
        fixed: "No",
        energy: 4,
        user_id: 4,
        pic: ""
    },
    {
        name : "Manny",
        gender: "Male",
        age: 6,
        weight: 22,
        breed: "Chihuahua mix",
        fixed: "Yes",
        energy: 1,
        user_id: 5,
        pic: ""
    },
    {
        name : "Bella",
        gender: "Female",
        age: 11,
        weight: 92,
        breed: "Husky",
        fixed: "Yes",
        energy: 2,
        user_id: 6,
        pic: ""
    },
    {
        name : "Willow",
        gender: "Female",
        age: 1,
        weight: 36,
        breed: "Pit Bull Mix",
        fixed: "Yes",
        energy: 4,
        user_id: 7,
        pic: ""
    },
    {
        name : "Frank",
        gender: "Male",
        age: 3,
        weight: 17,
        breed: "French Bulldog",
        user_id: 8,
        fixed: "No",
        energy: 4,
        pic : ""
    },
    {
        name : "Bowie",
        gender: "Male",
        age: 2,
        weight: 152,
        breed: "Leonburger",
        fixed: "Yes",
        energy: 2,
        user_id: 9,
        pic: ""
    },
    {
        name : "Hank",
        gender: "Male",
        age: 4,
        weight: 140,
        breed: "Great Dane",
        fixed: "Yes",
        energy: 2,
        user_id: 10,
        pic: ""
    }

];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;