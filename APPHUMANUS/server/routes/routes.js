// defines our API endpoints using express
import express from "express";
import { Sequelize } from "sequelize/dist/index.js"; // what ?
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

User.belongsToMany(Job, {
  through: Job_Application,
});
Job.belongsToMany(User, {
  through: Job_Application,
});

// Resolve m:m relationship between Job and Cause
// through the Job_Cause junction table (model)
Job.belongsToMany(Cause, {
  through: Job_Cause,
});
Cause.belongsToMany(Job, {
  through: Job_Cause,
});

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
router.get("/:id", async (req, res) => {
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
    return res.status(200).json(user); // {jobs}
  } catch (err) {
    console.log("couldn't retrieve this user", err);
    res.status(500).json({ message: "no user retrieved" });
  }
});

// Get all past jobs, for past jobs page
router.get("/pastjobs", async (req, res) => {
  // initiliase current date
  const currentD = new Date();
  const date = `${currentD.getDate()}/${
    currentD.getMonth() + 1
  }/${currentD.getFullYear()}`;
  try {
    console.log("trying to get jobs that are past today's date");
    const jobs = await Job.findAll({
      attributes: ["title", "start_date"],
      where: { start_date: { [Op.lt]: "2022-03-12" } }, //the start date is after today's date!
      // where: {title: "Trusts and Major Gifts Officer"}
    });
    return res.status(200).json(jobs);
  } catch (err) {
    console.log("couldn't retrieve any past jobs", err);
    res.status(500).json({ message: "no past jobs retrieved" });
  }
});

//  !these are not working
// list all jobs in a cause not working
router.get("/jobs/:cause_id", async (req, res) => {
  const cause_id = req.params.cause_id;
  try {
    console.log("trying to get all jobs in a cause");
    const causes = await Job_Cause.findAll({
      where: { cause_id }, // where cause_id = param
      include: {
        model: Job,
        as: "Job",
        attributes: { exclude: ["id"] },
      },
    });
    return res.status(200).json(causes);
  } catch (err) {
    console.log("couldn't retrieve any jobs of this cause", err);
    res
      .status(500)
      .json({ message: "couldn't retrieve any jobs of this cause" });
  }
});

// not working, says null.. but there is data in the cause table

// tried using raw sql and still nothing
router.get("/causes", async (req, res) => {
  // const desc = req.params.desc;
  try {
    console.log("trying to get all causes :'(");

    const causes = sequelize.query("SELECT description FROM cause", {
      type: QueryTypes.SELECT,
    });

    return res.status(200).json(causes);
  } catch (err) {
    console.log("couldn't retrieve any causes", err);
    res.status(500).json({ message: "no causes retrieved" });
  }
});

// Get all job applications for a specific user
// user is not associated to job_application!!!!
router.get("/job_applications/:email", async (req, res) => {
  const email = req.params.email;
  try {
    console.log("trying to get all job applications :'(");
    const applications = await Job_Application.findAll({
      include: {
        model: User,
        include: Job, // job is a
        where: { email },
      },
    });
    return res.status(200).json(applications);
  } catch (err) {
    console.log("couldn't retrieve any job applications", err);
    res.status(500).json({ message: "no job applications retrieved" });
  }
});

// Get all job applications
// user is not associated to job_application!!!!
router.get("/job_applications", async (req, res) => {
  try {
    console.log("trying to get all job applications :'(");
    const applications = await Job_Application.findAll();
    return res.status(200).json(applications);
  } catch (err) {
    console.log("couldn't retrieve any job applications", err);
    res.status(500).json({ message: "no job applications retrieved" });
  }
});

// Get all job causes

router.get("/job_causes", async (req, res) => {
  try {
    console.log("trying to get all job causes :'(");
    const job_causes = await Job_Cause.findAll({
      include: {
        model: Job,
        Cause,
        through: ["id"],
      },
    });
    return res.status(200).json(job_causes);
  } catch (err) {
    console.log("couldn't retrieve any job causes", err);
    res.status(500).json({ message: "no job causes retrieved" });
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
