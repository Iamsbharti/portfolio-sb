const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

/**Init Express server & envoirnment variables */
const app = express();

/**Middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

/**Listener */
//const port = process.env.PORT;
let server = app.listen(4201, () => console.log("Portfolio Client Up::", 4201));

//Init socket
console.log("CLIENT-SERVICE_________:", server.listening);
