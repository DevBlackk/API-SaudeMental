import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  rating: {
    type: DataTypes.ENUM('1', '2', '3', '4','5'),
  },
  comment: {
    type: DataTypes.TEXT
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

export { Review };