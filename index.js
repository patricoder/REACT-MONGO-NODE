const express = require("express");
const { port } = require("./config");

const app = express();

//routes
const apiRouter = require("./routes/api");
app.use("/", apiRouter);

app.listen(port, function () {
  console.log(`Serwer słucha... http://localhost:` + port);
});
