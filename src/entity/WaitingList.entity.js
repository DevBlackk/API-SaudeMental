import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";
import { User } from "./User.entity.js";

const WaitingList = sequelize.define("WaitingList", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  dateAdded: {
    type: DataTypes.DATE,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'id' 
    }
  },
  therapistId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Therapists', 
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

export { WaitingList }