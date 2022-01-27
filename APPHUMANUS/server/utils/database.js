import { Sequelize } from "sequelize"; // create the database connection

const sequelize = new Sequelize("comp6000_11", "comp6000_11", "yp1olyb", {
  dialect: "mysql",
  host: "dragon.kent.ac.uk",
});

sequelize
  .authenticate()
  .then(() => console.log("db connected"))
  .catch((e) => console.log(`db error ${e}`));

export default sequelize;
