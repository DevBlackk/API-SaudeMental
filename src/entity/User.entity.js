import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/connection.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING
  },
  accountType: {
    type: DataTypes.ENUM('User', "Therapist"),
    defaultValue: 'User'
  },
  createdAt: true,
  updatedAt: true,
});

export { User };
