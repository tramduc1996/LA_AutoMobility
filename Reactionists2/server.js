const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./app/routes");
const dotenv = require("dotenv");

dotenv.config();

const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use("/node-api/server.js/", routes);
app.use("/", routes);

app.use((req, res) => {
  res.status(404).send("<h2>The path is not valid</h2>");
});

app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
