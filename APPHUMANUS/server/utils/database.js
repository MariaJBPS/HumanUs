import { Sequelize } from "sequelize"; // create the database connection

const sequelize = new Sequelize("loginDB", "root", "root", {
  //dbname=mb2007", "mb2007", "weitab6"
  dialect: "mysql",
  host: "localhost", //dragon.kent.ac.uk
  port: "3306", //remove this?
  logging: true, // remove this?
});

sequelize
  .authenticate()
  .then(() => console.log("db connected"))
  .catch((e) => console.log(`db error ${e}`));

export default sequelize;
