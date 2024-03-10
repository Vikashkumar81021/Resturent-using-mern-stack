import mongoose from "mongoose";

export const dbConncection = () => {
  mongoose
    .connect(process.env.MongoURL, {
      dbName: "RESTURANT",
    })
    .then(() => {
      console.log("database connection successfully");
    })
    .catch((error) => {
      console.log(
        `some error occured while connecting to database ! ${error} `
      );
    });
};


