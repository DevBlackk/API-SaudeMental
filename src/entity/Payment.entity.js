import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false
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

export { Payment };