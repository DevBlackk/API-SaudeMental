import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Therapist } from "./Therapist.entity.js";
import { Appointment } from "./Appointment.entity.js";
import { Review } from "./Review.entity.js";
import { UserReview } from "./UserReview.entity.js";

const User = sequelize.define("User", {
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
  phone: {
    type: DataTypes.STRING
  },
  accountType: {
    type: DataTypes.ENUM('User', "Therapist"),
    defaultValue: 'User'
  },
  createdAt: true,
  updatedAt: true,
});

User.hasMany(Therapist, {
  foreignKey: 'user_id'
})

User.hasMany(Appointment, {
  foreignKey: 'user_id'
})

User.belongsToMany(Review, {
  through: {
    model: UserReview
  },
  foreignKey: 'review_id'
})

Review.belongsToMany(User, {
  through: {
    model: UserReview
  },
  foreignKey: 'review_id'
})

export { User };
