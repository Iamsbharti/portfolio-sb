const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { notFound, handleError } = require("./middlewares/errorHandler");
const httpLogger = require("./middlewares/httpLogger");
const logger = require("./library/logger");
const db = require("./initdb");
const { formatResponse } = require("./library/formatResponse");
const path = require("path");
let port = process.env.API_PORT || 3001;
const router = require("./router/router");
/**config env */
dotenv.config();

/**init app */
const app = express();

/**middlewares */
app.use(httpLogger);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authToken, access-control-allow-origin"
  );
  next();
});
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../client/build")));

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.get("/api", (req, res) => {
  res.status(200).send("Welcome to port`de - API");
});
app.use(process.env.API_VERSION, router);
app.use(notFound);
app.use(handleError);
db.initdb();
app.listen(port, () => logger.info(`Portfolio server running on-${port}`));
