//contains the actions that are executed when requests are received
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";


import { User, Job_Application} from "../models/user.js";

/* signup registers users in the database.
First, it checks if the email provided has already been registered.
Then, if the email and password have been received, it hashes the password
and stores the user in the database. */

const signup = (req, res, next) => {
  // checks if email already exists
  console.log("starting signup" + JSON.stringify(req.body));
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUser) => {
      if (dbUser) {
        res.status(409).json({ message: "email already exists" });
        next();
      } else if (req.body.email && req.body.password) {
        console.log("signup with email and password");
        // password hash
        bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
          if (err) {
            res.status(500).json({ message: "couldnt hash the password" });
            next();
          } else if (passwordHash) {
            console.log("creating user");
            User.create({
              email: req.body.email,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              password: passwordHash,
            })
              .then(() => {
                console.log("user created");
                res.status(200).json({ message: "user created" });
                next();
              })
              .catch((err) => {
                console.log(err);
                res
                  .status(502)
                  .json({ message: "error while creating the user" });
                next();
              });
          }
        });
      } else if (!req.body.password) {
        res.status(400).json({ message: "password not provided" });
        next();
      } else if (!req.body.email) {
        res.status(400).json({ message: "email not provided" });
        next();
      }
    })
    .catch((err) => {
      console.log("error", err);
      next();
    });
};

//login handles login requests. It starts by checking if the email corresponds to a
//database user. If that’s the case, it hashes the password and compares it to the
//user password in the database. If they match, it responds with a temporary secret token.
const login = (req, res, next) => {
  console.log("starting login");
  // checks if email exists
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUser) => {
      if (!dbUser) {
        return res.status(404).json({ message: "user not found" });
      } else {
        // password hash
        bcrypt.compare(
          req.body.password, // entered password
          dbUser.password,
          (err, compareRes) => {
            if (err) {
              // error while comparing
              res
                .status(502)
                .json({ message: "error while checking user password" });
            } else if (compareRes) {
              // password match
              const token = jwt.sign({ email: req.body.email }, "secret", {
                expiresIn: "1h",
              });
              res.status(200).json({ message: "user logged in", token: token });
            } else {
              // password doesnt match
              res.status(401).json({ message: "invalid credentials" });
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};



//isAuth asks for the secret token and, if it is provided, proceeds to verify it.
//If everything goes well, it will finally respond with the private resource.
//In this case, that resource will be just a message containing “here is your resource”.

const isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "not authenticated" });
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secret");
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "could not decode the token" });
  }
  if (!decodedToken) {
    res.status(401).json({ message: "unauthorized" });
  } else {
    res.status(200).json({ message: "here is your resource" }); 
  }
};

export { signup, login, isAuth };
