// import { Sequelize } from "sequelize";
// import sequelize from "../utils/database.js";

const Hello = "hello";
// const User = sequelize.define("user", {
	
// 	/* 
// 	* Define the object model for 'user' table 
// 	*/
// 		// Field definitions 
// 		email: {
// 			field: 'email', 
// 			type: Sequelize.STRING(255),
// 			primaryKey: true
// 		}, 
// 		first_name: { 
// 			type: Sequelize.STRING(255) 
// 		},
// 		last_name: { 
// 			type: Sequelize.STRING(255) 
// 		},
// 		password: {
// 			field: 'password', 
// 			type: Sequelize.STRING(60)	// Size of bcrypt hash produced (60 chars) 
// 		}

// 	},{
		
// 		// Model configuration options 
// 		sequelize: sequelize, 	// sequelize instance
// 		modelName: 'User', 
// 		tableName: 'user', // original table name is users, so leave this
// 		// Set character set and collation for reliable hash comparisons 
// 		charset: 'ascii', 
// 		collate: 'ascii_bin' 
// 		}
// );

// /*
//  *	Declare Job model with Sequelize instance
//  */
//  const Job = sequelize.define("job", {
// 	/*
// 	 * Define the object model for 'job' table
// 	 * Job will have a charity_email = User.email Fk Reference after
// 	 * calling User.hasMany(job)
// 	 */
  
// 	id: {
// 	  type: Sequelize.INTEGER,
// 	  autoIncrement: true,
// 	  primaryKey: true,
// 	},
// 	charity_email: {
// 	  type: Sequelize.STRING(255),
// 	  allowNull: false,
// 	},
// 	charity_name: {
// 	  type: Sequelize.STRING(255),
// 	},
// 	charity_bio: {
// 	  type: Sequelize.STRING(255), // change this to more chars later
// 	},
// 	title: {
// 	  type: Sequelize.STRING(255),
// 	},
// 	description: {
// 	  // Called description in final database
// 	  type: Sequelize.TEXT,
// 	},
// 	post_date: {
// 	  type: Sequelize.DATE,
// 	  defaultValue: Sequelize.NOW,
// 	  allowNull: false,
// 	},
// 	start_date: {
// 	  type: Sequelize.DATE,
// 	  allowNull: false,
// 	},
// 	duration_days: {
// 	  type: Sequelize.INTEGER,
// 	  defaultValue: 1,
// 	}
//   }, {
// 	sequelize: sequelize,
// 	modelName: 'Job',
// 	tableName: 'job' 
//   });

//   const Job_Cause = sequelize.define("job_cause", {
// 	/* 
// 	* Define object model for 'job_cause' table 
// 	* The table is a junction which resolves the many-to-many association 
// 	* between the 'job' and 'cause' tables 
// 	* Job_Cause will have job_id = Job.id and cause_id = Cause.id references
// 	* after calling: 
// 	*		Job.belongsToMany(Cause, { through: Job_Cause }); 
// 	*		Cause.belongsToMany(Job, { through: Job_Cause }); 
// 	*/

// 		job_id: {
// 			type: Sequelize.INTEGER, 
// 			primaryKey: true, 
// 			// Set Fk reference to Job 
// 			references: {
// 				model: sequelize.models.Job, 
// 				key: 'id' 
// 			}
// 		}, 
// 		cause_id: {
// 			type: Sequelize.INTEGER, 
// 			primaryKey: true, 
// 			// Set Fk reference to Cause 
// 			references: {
// 				model: sequelize.models.Cause, 
// 				key: 'id' 
// 			}
// 		}
	 
// 	},{
// 		sequelize: sequelize,
// 		modelName: 'Job_Cause', 
// 		tableName: 'job_cause',
// 		indexes: [
// 			{
// 				unique: true,
// 				fields: ['job_id', 'cause_id']
// 			}
// 		]
	
// });

// const Job_Application = sequelize.define("job_application", {
// 	/*
// 	 * Define object model for 'job_application' table
// 	 * The table is a junction which resolves the many-to-many association
// 	 * between the 'user' and 'job' table, (applications for jobs)
// 	 * Job_Application will have volunteer_email = User.email
// 	 * and job_id = Job.id references after calling:
// 	 *		User.belongsToMany(Job, { through: Job_Application });
// 	 *		Job.belongtsToMany(User, {through: Job_Application });
// 	 */
  
// 	volunteer_email: {
// 	  type: Sequelize.STRING(255),
// 	  primaryKey: true,
// 	  // Set Fk relationship (1:m) with User
// 	  references: {
// 		model: sequelize.models.User,
// 		key: "email",
// 	  },
// 	},
// 	job_id: {
// 	  type: Sequelize.INTEGER,
// 	  primaryKey: true,
// 	  // Set Fk relationship (1:m) with Job
// 	  references: {
// 		model: sequelize.models.Job,
// 		key: "id",
// 	  },
// 	}
//   },{
  
// 	sequelize: sequelize,
// 	modelName: "Job_Application",
// 	tableName: "job_application",
// 	indexes: [
// 	  {
// 		// Specify composite UNIQUE constraint
// 		unique: true,
// 		fields: ["volunteer_email", "job_id"],
// 	  },
// 	],
//   });

//   const Cause = sequelize.define("cause", {
// 	/*
// 	* Define object model for 'cause' table 
// 	*/

// 		id: {
// 			type: Sequelize.INTEGER, 
// 			primaryKey: true,
// 			auto_increment: true
// 		},
// 		description: {
// 			type: Sequelize.STRING(255), 
// 			allowNull: false, 
// 			unique: true 
// 		}
// 	},{
	
// 		sequelize: sequelize,
// 		modelName: 'Cause',
// 		tableName: 'cause' 
// }); 

// export default {User, Job, Job_Cause, Job_Application, Cause};

export default Hello;
