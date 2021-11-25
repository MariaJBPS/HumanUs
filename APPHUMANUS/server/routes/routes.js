// defines our API endpoints using express
const express = require("express");

const signup = require("../controllers/auth.js");
const login = require("../controllers/auth.js");
const isAuth = require("../controllers/auth.js");

const router = express.Router();

// defines our three endpoints:
router.post("/login", login);

router.post("/signup", signup);

router.get("/private", isAuth);

router.get("/public", (req, res, next) => {
  res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
});

//export default router;
module.exports = { router };
