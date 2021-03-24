const { Model, DataTypes } = require('sequelize');
const User = require('../User');


class Friends extends Model {};

Friends.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    User_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    friend_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }

});

module.exports =  Friends;