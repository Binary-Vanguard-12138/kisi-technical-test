const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("express");
const cookieParser = require("cookie-parser");

const logger = require("./helpers/logger");

const app = express();
app.use(helmet());

// cors
app.use(cors());

// Init Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// registering routes
app.use("/api/v1", require("./routes/api/v1"));
app.use(express.static("public"));

// start the Express server
const INTERNAL_PORT = 5000;
app.listen(INTERNAL_PORT, () =>
  logger.info(`RESTful API server started on port ${INTERNAL_PORT}`)
);

module.exports = app;
