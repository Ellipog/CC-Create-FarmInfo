const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = "mongodb+srv://admin:gql5zr2RCx5yUXK0@createdb.626gsc1.mongodb.net/FarmData";
const port = 25584;

mongoose.set("strictQuery", false);
mongoose.connect(db, {});

const farmOutputData = new mongoose.Schema({
  owner: String,
  item: String,
  running: Boolean,
  total: String,
  image: String,
  createdAt: { type: Date, expires: 60 * 60 * 24 },
});

const FarmInfo = mongoose.model("FarmInfo", farmOutputData);
app.use(bodyParser.json());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } else {
      const allowedOrigins = ["http://localhost:3000"];
      const isAllowed = allowedOrigins.includes(origin);
      callback(isAllowed ? null : new Error("Origin not allowed"), isAllowed);
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.post("/data", (req, res) => {
  const data = req.body;

  const newFarmInfo = new FarmInfo({
    owner: data.owner,
    item: data.item,
    running: data.running,
    total: data.total,
    image: data.image,
  });

  newFarmInfo.save((err, savedData) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving data");
    } else {
      console.log("Saved data:", savedData);
      res.send("Data received and saved successfully");
    }
  });
});

app.get("/fetchFarmInfo", (req, res) => {
  let query = {};
  if (req.query.item) {
    query = { item: req.query.item, farmOwner: req.query.farmOwner };
  } else {
    query = { farmOwner: req.query.farmOwner };
  }

  FarmInfo.find(query).then((data) => {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
