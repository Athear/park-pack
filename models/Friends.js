const { Model, DataTypes } = require('sequelize');
const User = require('./User');
const sequelize = require('../config/connection');


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
    friend_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'friend',

});

module.exports =  Friends;