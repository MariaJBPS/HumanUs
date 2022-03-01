// defines our API endpoints using express
import express from "express";
import { signup, login, isAuth } from "../controllers/auth.js";

const router = express.Router();

// defines our three endpoints:
router.post("/login", login);

router.post("/signup", signup);

router.get("/private", isAuth);

router.get("/public", (req, res, next) => {
  res.status(200).json({ message: "here is your public resource" });
  res.end(); // added this
});

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
  res.end(); //added this
});

export default router;
