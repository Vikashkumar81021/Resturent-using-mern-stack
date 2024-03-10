import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConncection} from "./db/db.js";
import { errorMiddleware } from "./error/error.js";
import reservationrouter from "./routes/reservation-routes.js";
const app = express();
dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation',reservationrouter)
dbConncection()

app.use(errorMiddleware)

export default app;
