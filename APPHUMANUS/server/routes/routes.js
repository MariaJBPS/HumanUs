// defines our API endpoints using express
import express from "express";
import { Sequelize } from "sequelize/dist/index.js"; 
//import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { signup, login, isAuth } from "../controllers/auth.js";
import {
  User,
  Job,
  Cause,
  Job_Cause,
  Job_Application,
} from "../models/user.js";
import sequelize from "../utils/database.js";
import { Op } from "@sequelize/core";
const router = express.Router();


// defines our  endpoints:
router.post("/login", login);

router.post("/signup", signup);

router.get("/private", isAuth);

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

// Get all jobs, for feeds page
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

// get a specific job by its id! for job details
router.get("/job/:id", async (req, res) => {
  const id = req.params.id;
  try {
    console.log("trying to get this job :'(");
    const job = await Job.findOne({
      attributes: [
        "title",
        "charity_email",
        "charity_name",
        "charity_bio",
        "post_date",
        "start_date",
        "description",
        "job_duration_days",
      ],
      where: { id },
      // where: { '$id$': id},
    });
    return res.status(200).json(job);
  } catch (err) {
    console.log("couldn't retrieve this job", err);
    res.status(500).json({ message: "no job retrieved" });
  }
});

// get a specific user, for profile page
router.get("/users/:email", async (req, res) => {
  const email = req.params.email;
  try {
    console.log("trying to get this user :'(");
    const user = await User.findOne({
      attributes: {
        exclude: ["password"], // gets user email, first and last name
      },
      where: { email },
    });
    return res.status(200).json(user); 
  } catch (err) {
    console.log("couldn't retrieve this user", err);
    res.status(500).json({ message: "no user retrieved" });
  }
});

// Get all past jobs, for past jobs page
router.get("/past/jobs", async (req, res) => {
  // initiliase current date
  const today = moment().format('YYYY-MM-DD HH:mm');
  try {
    console.log("trying to get jobs that are past today's date");
    const pastjobs = await Job.findAll({
      //attributes: ["title", "start_date"],
      where: {'$start_date$':{[Op.lt]: today }}, //the start date is after today's date!
      // where: {title: "Trusts and Major Gifts Officer"}
    });
    return res.status(200).json(pastjobs);
  } catch (err) {
    console.log("couldn't retrieve any past jobs", err);
    res.status(500).json({ message: "no past jobs retrieved" });
  }
});

//upcoming jobs for active jobs page
router.get("/upcoming/jobs", async (req, res) => {
  // initiliase current date
  const today = moment().format('YYYY-MM-DD HH:mm');
  try {
    console.log("trying to get jobs that are after today's date");
    const pastjobs = await Job.findAll({
      where: {'$start_date$':{[Op.gte]: today }},
    });
    return res.status(200).json(pastjobs);
  } catch (err) {
    console.log("couldn't retrieve any upcoming jobs", err);
    res.status(500).json({ message: "no past upcoming retrieved" });
  }
});

// list all jobs in a cause, for filtering
router.get("/cause/:cause_id", async (req, res) => {
  const cause_id = req.params.cause_id;
 
  try {
    console.log("trying to get all jobs in a cause");
    const CauseTry = await Job.findAll({
      where: { '$cause_id$':cause_id}, // where cause_id = param
      include: {
        model: Cause,
        as: "Cause1",
        // attributes: { exclude: ["id"] },
      },
    });
    return res.status(200).json(CauseTry);
  } catch (err) {
    console.log("couldn't retrieve any jobs of this cause", err);
    res
      .status(500)
      .json({ message: "couldn't retrieve any jobs of this cause" });
  }
});

// get all causes, 
router.get("/allcauses", async (req, res) => {
  try {
    console.log("trying to get all causes");
    const allcause = await Cause.findAll();
    return res.status(200).json(allcause); // {jobs}
  } catch (err) {
    console.log("couldn't retrieve any causes", err);
    res.status(500).json({ message: "no causes retrieved" });
  }
});


// Get all job applications for a specific user
// user is not associated to job_application!!!!
router.get("/jobapps/:email", async (req, res) => {
  const email = req.params.email;
  try {
    console.log("trying to get all job applications :'(");
    const applications = await Job.findAll({
      where: { '$volunteer_email$':email},
      include: {
        model: User,
         as: "User1",
     
      },
    });
    return res.status(200).json(applications);
  } catch (err) {
    console.log("couldn't retrieve any job applications", err);
    res.status(500).json({ message: "no job applications retrieved" });
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
