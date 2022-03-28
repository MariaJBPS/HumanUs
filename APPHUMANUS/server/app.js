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



app.listen(5000); // port where the server will be listening for requests


