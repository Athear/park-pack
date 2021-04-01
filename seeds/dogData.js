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
        pic: "shihtzu.jpg"
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
        pic: "aussieShepard.jpeg"
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
        pic: "Pyrenees.jpg"
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
        pic: "Havanese.jpeg"
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
        pic: "chihuahuaMix.jpg"
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
        pic: "Husky_Mix.jpg"
    },
    {
        name : "Sunny",
        gender: "Male",
        age: 1,
        weight: 64,
        breed: "Lab-Pit Mix",
        fixed: "Yes",
        energy: 4,
        user_id: 7,
        pic: "Pitmix.png"
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
        pic : "french_bulldog.png"
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
        pic: "Leonburger.jpeg"
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
        pic: "greatDane.jpeg"
    },
    {
        name : "Chiquitin",
        gender: "Male",
        age: 2,
        weight: 12,
        breed: "Pekinese Mix",
        fixed: "Yes",
        energy: 4,
        user_id: 11,
        pic: "chicky.jpg"
    }
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;