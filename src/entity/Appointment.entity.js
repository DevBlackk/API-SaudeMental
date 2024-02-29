import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { User } from "./User.entity.js"

const Appointment = sequelize.define("Appointment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'Confirmed', 'Cancelled'),
    defaultValue: 'Pending'
  },
  createdAt: true,
  updatedAt: true,
});

Appointment.belongsTo(User, {
  constraint: true,
  foreignKey: 'appointment_id'
})

export { Appointment };
