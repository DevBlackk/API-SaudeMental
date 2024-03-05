import express from "express";
import { testConnection } from "./config/connection.js";
import { useRoutes } from "./routes/user.route.js";
import { dbSync } from "./config/dbSync.js";
import { therapistRouter } from "./routes/therapist.route.js";
import { appointmentRouter } from "./routes/appointment.route.js";
import { reviewRouter } from "./routes/review.route.js";
import {
  corsMiddleware,
  jsonMiddleware,
} from "./middlewares/globalMiddlewares.js";

const app = express();

const port = process.env.PORT || 3333

app.use(jsonMiddleware);
app.use(corsMiddleware);
app.use("/user", useRoutes);
app.use('/therapists', therapistRouter);
app.use('/appointments', appointmentRouter);
app.use('/reviews', reviewRouter);
app.use(dbSync);

app.listen(port, () => {
  testConnection(), console.log("server on in port 3333!");
});
