import express from "express";
import { testConnection } from "./config/connection.js";
import { routes } from "./routes/user.route.js";
import { dbSync } from "./config/dbSync.js";
import { therapistRouter } from "./routes/therapist.route.js";


const app = express();

app.use(express.json());
app.use('/user', routes);
app.use('/therapists', therapistRouter);
app.use(dbSync)

// app.listen(3333, () => {

//   testConnection(), console.log("server on in port 3333!");
// });

app.listen(3333, () => {
  testConnection();
  console.log("Server is running on port 3333!");
});
