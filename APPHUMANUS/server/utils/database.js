import { Sequelize } from "sequelize"; // create the database connection
//import all models here and declare associations
import {
  User,
  Job,
  Job_Cause,
  Job_Application,
  Cause,
} from "../models/user.js";
// import Job from "../models/job.js";
// import Job_Cause from "../models/job_cause.js";
// import Job_Application from "../models/job_application.js";
// import Cause from "../models/cause.js";

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
});

// sequelize.addModels([User,Job, Cause, Job_Application, Job_Cause ]);

// Resolve m:m relationship between Volunteer and Job
// through the Job_Application junction table (model)
User.belongsToMany(Job, { through: Job_Application });
Job.belongsToMany(User, { through: Job_Application });

// Resolve m:m relationship between Job and Cause
// through the Job_Cause junction table (model)
Job.belongsToMany(Cause, { through: Job_Cause });
Cause.belongsToMany(Job, { through: Job_Cause });

sequelize
  .authenticate()
  .then(() => console.log("db connected, here"))
  .catch((e) => console.log(`db error ${e}`));

export default sequelize;
