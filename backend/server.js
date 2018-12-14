const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const User = require("./User");
const axios = require("axios");

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

app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/", (req, res) => {
  // let user = new User({ name: "chris", team: "cavaliers" });
  // user.save(err => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Success");
  //   }
  // });
  res.send();
});

router.get("/landing", async (req, res) => {
  let east = await axios
    .get("https://demo7799958.mockable.io/teams")
    .then(teams => {
      return teams.data;
    });

  res.json(east);
  //use promise all with real data
});

router.get("/data", (req, res) => {
  User.find((err, data) => {
    if (err) {
      return res.json({ success: false, error: err });
    } else {
      res.json({ success: true, data: data });
    }
  });
});

app.listen(API_PORT, () => {
  console.log(`server is listening on ${API_PORT} `);
});
