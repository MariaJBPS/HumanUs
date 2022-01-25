import { Sequelize } from "sequelize"; // create the database connection

const sequelize = new Sequelize("loginDB", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  logging: true,
});

sequelize
  .authenticate()
  .then(() => console.log("db connected"))
  .catch((e) => console.log(`db error ${e}`));

export default sequelize; //use this syntax instead:
