const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Join_Dog_Activity extends Model {};

Join_Dog_Activity.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    dog_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'dog',
            key: 'id',
        },
    },
    activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'activity',
            key: 'id'
        }
    }

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'join_dog_activity',

});

module.exports =  Join_Dog_Activity;