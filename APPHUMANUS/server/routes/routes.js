// defines our API endpoints using express
import express from "express";
import { signup, login, isAuth } from "../controllers/auth.js";
import {
  User,
  Job,
  Job_Cause,
  Job_Application,
  Cause,
} from "../models/user.js";

const router = express.Router();

// defines our  endpoints:
router.post("/login", login);

// get all users test
router.get("/users", async (req, res) => {
  try {
    console.log("trying to get all users :'(");
    const users = await User.findAll();
    return res.status(200).json(users); // {jobs}
  } catch (err) {
    console.log("couldn't retrieve any users", err);
    res.status(500).json({ message: "no users retrieved" });
  }
});

router.post("/signup", signup);

router.get("/private", isAuth);


// Get all jobs
router.get("/", async (req, res) => {
  try {
    console.log("trying to get all jobs :'(");
    const jobs = await Job.findAll({ attributes: ["title", "start_date"] });
    return res.status(200).json(jobs); // {jobs}
  } catch (err) {
    console.log("couldn't retrieve any jobs", err);
    res.status(500).json({ message: "no jobs retrieved" });
  }
});

router.get("/public", (req, res, next) => {
  res.status(200).json({ message: "here is your public resource" });
  res.end(); // added this
});

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
  res.end(); //added this
});

export default router;
