import express from "express";
import { sendReservation } from "../controller/reservation-controller.js";
const router = express.Router();
router.route('/send').post(sendReservation)

export default router;
