const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class chatMessage extends Model {}

chatMessage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "chatMessage",
  }
);

module.exports = chatMessage;
