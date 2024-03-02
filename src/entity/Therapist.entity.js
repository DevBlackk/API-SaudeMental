import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const Therapist = sequelize.define("Therapist", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  licenseNumber: { 
    type: DataTypes.STRING,
    defaultValue: null
  },
  medicalSpecialty: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
});

export { Therapist };