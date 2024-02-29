import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Appointment } from "./Appointment.entity.js"

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE
  },
  createdAt: true,
  updatedAt: true,
});

export { Payment };