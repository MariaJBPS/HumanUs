import express from "express";
import QueryTypes from "sequelize";

import sequelize from "./utils/database.js";

import router from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

sequelize.authenticate();
sequelize
  .sync({ force: false }) // avoids losing data, so it doesnt create tables again
  .then(() => {
    console.log("yes re-sync done");
  });

// show all sequelize tables
sequelize
  .getQueryInterface()
  .showAllSchemas()
  .then((result) => {
    console.log(result);
  });

// sequelize
//   .getQueryInterface()
//   .describeTable("job_cause")
//   .then((result) => {
//     console.log("table cause fields", result);
//   });

// sequelize
//   .getQueryInterface()
//   .getForeignKeysForTables([
//     "user",
//     "job",
//     "cause",
//     "job_application",
//     "job_cause",
//   ])
//   .then((result) => {
//     console.log("get foreignk constraints for tables", result);
//   });


// sequelize
//   .query("SELECT * FROM cause", { type: QueryTypes.SELECT })
//   .then((result) => console.log("SELECT * from table cause", result));

// sequelize
//   .query("SELECT * FROM user", { type: QueryTypes.SELECT })
//   .then((result) => console.log("SELECT * from table user", result));

// sequelize
//   .query("SELECT * FROM job", { type: QueryTypes.SELECT })
//   .then((result) => console.log("SELECT * from table job", result));

// sequelize
//   .query("SELECT * FROM job_application", { type: QueryTypes.SELECT })
//   .then((result) => console.log("SELECT * from table job_application", result));

// sequelize
//   .query("SELECT * FROM job_cause", { type: QueryTypes.SELECT })
//   .then((result) => console.log("SELECT * from table job_cause", result));

  

// job application has 4 constraints, so id as job_id and email volunteer_email twice..
// sequelize
//   .getQueryInterface()
//   .getForeignKeyReferencesForTable(["job_application"])
//   .then((result) => {
//     console.log("get foreignk constraints for job_application", result);
//   });

app.listen(5000); // port where the server will be listening for requests

// await sequelize.close();
//sequelize.after(() => { sequelize.close() });

// was in package json test
//npx mocha --exit test/**/*.js
