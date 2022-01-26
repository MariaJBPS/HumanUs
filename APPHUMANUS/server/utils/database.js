import { Sequelize } from "sequelize"; // create the database connection

const sequelize = new Sequelize("mb2007", "mb2007", "weitab6", {
  dialect: "mysql",
  host: "dragon.kent.ac.uk",
});

sequelize
  .authenticate()
  .then(() => console.log("db connected"))
  .catch((e) => console.log(`db error ${e}`));

export default sequelize;
