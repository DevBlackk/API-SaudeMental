import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const Therapist = sequelize.define("Therapist", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  licenseNumber: { 
    type: DataTypes.STRING,
    defaultValue: null
  },
  medicalSpecialty: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  paymentId: {
    type: DataTypes.UUID,
    references: {
      model: "Payments",
      key: "id"
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