const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

require("dotenv").config({
  path: "/Users/chrispfaff/Desktop/Projects/FingerRoll/.env"
});

const app = express();
const API_PORT = 3001;

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
app.use("/api", router);

router.get("/", (req, res) => {
  res.send("hello");
});

app.listen(API_PORT, () => {
  console.log(`server is listening on ${API_PORT} `);
});
