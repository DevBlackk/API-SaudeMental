import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { User } from "./User.entity.js"

const Therapist = sequelize.define("Therapist", {
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
  licenseNumber: { 
    type: DataTypes.STRING
  },
  createdAt: true,
  updatedAt: true,
});

Therapist.hasMany(User, {
  constraint: true,
  foreignKey: 'user_id'
})

export { Therapist };