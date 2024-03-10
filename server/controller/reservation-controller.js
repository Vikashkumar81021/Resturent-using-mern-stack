import { Reservation } from "../model/reservation-model.js";
import ErrorHandler from "../error/error.js";

export const sendReservation = async (req, res, next) => {
  const { firstname, lastname, email, phone, date, time } = req.body;
  if (!firstname || !lastname || !email || !phone || !date || time) {
    return next(new ErrorHandler("Please fill full regervatio"));
  }
  try {
    await Reservation.create(firstname, lastname, email, phone, date, time);
    res.status(200).json({
      sucess: true,
      message: "Reservation send successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationError = Object.values(error.errors).map(err.message);
      return next(new ErrorHandler(validationError.join(", "), 400));
    }
    return next(error);
  }
};
