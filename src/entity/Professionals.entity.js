import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const Professionals = sequelize.define("Professional", {
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
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  office: {
    type: DataTypes.ENUM(
      "Psiquiatra",
      "Psicólogo",
      "Terapeuta",
      "Conselheiro",
      "Enfermeiro",
      "Assistente Social"
    ),
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: true,
  updatedAt: true,
});

export { Professionals };
