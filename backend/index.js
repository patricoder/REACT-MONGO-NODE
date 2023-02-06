const { json } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const env = require("dotenv");
const app = express();
const apiRouter = require("./routes/routes");
const cors = require("cors");
//parsers
app.use(bodyParser.json());

//include local .env file to my project
env.config();

//db
require("./db/mongoose");

app.use(cors());

//routes
app.use("/api/", apiRouter);

app.listen(3001, (req, res) => {
  console.log("Server is listening..." + "PORT: 3001");
});

app.get("/", (req, res) => {
  res.send("To jest strona główna.");
});
