import express from "express";
import { testConnection } from "./config/connection.js";
import { routes } from "./routes/user.route.js";
import { dbSync } from "./config/dbSync.js";
import {
  corsMiddleware,
  jsonMiddleware,
} from "./middlewares/globalMiddlewares.js";

const app = express();

app.use(jsonMiddleware);
app.use(corsMiddleware);
app.use("/user", routes);
app.use(dbSync);

app.listen(3333, () => {
  testConnection(), console.log("server on in port 3333!");
});
