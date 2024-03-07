import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

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
  hour: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  clientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Clients",
      key: "id",
    },
  },
  therapistId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Therapists",
      key: "id",
    },
  },
  waitingListId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "WaitingLists",
      key: "id",
    },
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export { Appointment };
