import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/connection.js";
import { User } from "./User.entity.js";
import { UserWaitingList } from "./UserWaitingList.entity.js";
import { Therapist } from "./Therapist.entity.js";

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
  createdAt: true,
  updatedAt: true,
});

export { WaitingList }