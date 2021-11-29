import express from "express";

import sequelize from "./utils/database.js";

import router from "./routes/routes.js";
//import { Sequelize } from "sequelize/dist";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(router);

sequelize.authenticate();
sequelize.sync();

app.listen(5000); // port where the server will be listening for requests
