import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgresql://davidsonwferreira8:hF72LIJDwKXY@ep-flat-dream-a515pcbg.us-east-2.aws.neon.tech/api_saudemental?sslmode=require');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

export { testConnection, sequelize };
