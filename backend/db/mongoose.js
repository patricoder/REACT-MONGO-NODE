const mongoose = require("mongoose");

const connection = mongoose
  .set("strictQuery", true)
  .connect(`${process.env.DATABASE}`, { dbName: "training-plan" })
  .then((res) => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("An error occured" + err);
  });

module.exports = connection;
