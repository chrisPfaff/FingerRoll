const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

require("dotenv").config({
  path: "/Users/chrispfaff/Desktop/Projects/FingerRoll/.env"
});

const API_PORT = 3001;
const app = express();

const router = express.Router();

const dbRoute = `mongodb://${process.env.DB_USER}:${
  process.env.DB_PASSWORD
}@ds031601.mlab.com:31601/finger-roll`;

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getData", (req, res) => {
  res.send("hello");
});
