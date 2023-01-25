const { json } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const { port } = require("./config");
const apiRouter = require("./routes/api");
const app = express();

//db
require("./db/mongoose");

//parsers
//Content-type: application/json
app.use(bodyParser.json())


//routes 
app.use("/api/", apiRouter);

//server
app.listen(port, function () {
  console.log(`Serwer słucha... http://localhost:` + port);
});
