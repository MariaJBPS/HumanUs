import { Sequelize } from "sequelize"; // create the database connection
//import all models here and declare associations
import {
  User,
  Job,
  Cause,
} from "../models/user.js";

const sequelize = new Sequelize("comp6000_11", "comp6000_11", "yp1olyb", {
  dialect: "mysql",
  host: "dragon.kent.ac.uk",

  // Set global options for Sequelise
  define: {
    // Timestamps
    // Do not require/create/use 'createdAt' or 'updatedAt' fields
    timestamps: false,

    // Logging outputs all queries made to the console
    logging: true, // set to false for deployed version
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Resolve m:m relationship between Volunteer and Job
// through the Job_Application junction table (model)
User.belongsToMany(Job, {
  through: "job_application",
  as: "Job",
  foreignKey: "volunteer_email",
  otherKey: "job_id",
});

Job.belongsToMany(User, {
  through: "job_application",
  as: "User1",
  foreignKey: "job_id",
  otherKey: "volunteer_email",
});

// Resolve m:m relationship between Job and Cause
// through the Job_Cause junction table (model)

Job.belongsToMany(Cause, {
  through: "job_cause",
  as: "Cause1",
  foreignKey: "job_id",
  otherKey: "cause_id",
});

Cause.belongsToMany(Job, {
  through: "job_cause",
  as: "Job1",
  foreignKey: "cause_id",
  otherKey: "job_id",
});

sequelize
  .authenticate()
  .then(() => console.log("db connected, here"))
  .catch((e) => console.log(`db error ${e}`));

export default sequelize;
