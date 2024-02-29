import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import {} from "./UserReview.entity.js"

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
  createdAt: true,
  updatedAt: true,
});

// Review.hasMany(Appointment, {
//   foreignKey: 'appointment_id'
// })

export { Review };