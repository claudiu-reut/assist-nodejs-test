const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
var incr = 1;
var incr2 = 256;
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const db = require("./models/");
const userdata = require("./signup.json");
const userprefs = require("./userpref.json");
const clubinfo = require("./clubinfo.json");
const User = db.user;
const UserPrefs = db.userpref;
const Club = db.club;
console.log(userdata);
db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and Resync Db");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({message: "Home page}"});
});
//used get because data is read from local file otherwise i would have used post
app.get("/api/sign-up", (req, res) => {
  console.log("user hit signup");
  try {
    User.create({
      username: userdata.name,
      email: userdata.email,
      password: bcrypt.hashSync(userdata.password, 8),
    });
    UserPrefs.create({});
    res.status(200).json({message: "user created from json file"});
  } catch (err) {
    res.status(401).json({message: "failed to create user" + err.message});
  }
});
app.get("/api/club/:id", (req, res) => {
  try {
    const id = req.params.id;
    Club.findByPk(id).then((data) => {
      if (data) res.status(200).json(data);
      else res.status(404).json({message: `failed to fetch club with id ${req.params.id}`});
    });
  } catch (err) {
    res.status(404).json({message: `failed to fetch club with id ${req.params.id}`});
  }
});

app.post("/api/reset-password", (req, res) => {
  const id = req.body.id;
});
//used get because data is read from local file otherwise i would have used post
app.post("/api/update-preferences", (req, res) => {
  console.log("user hit update-prefs");
});
//used get because data is read from local file otherwise i would have used post
app.get("/api/club", (req, res) => {
  try {
    Club.create({
      name: clubinfo.name,
      address: clubinfo.address,
      owner: clubinfo.owner,
    });
    res.status(200).json({message: "club created from json file"});
  } catch (err) {
    res.status(401).json({message: "failed to create club" + err.message});
  }
});
const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
