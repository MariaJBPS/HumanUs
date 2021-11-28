import { Sequelize } from "sequelize";  // create the database connection


const sequelize = new Sequelize("loginDB", "root", "jamaicinha12", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize; //use this syntax instead:

