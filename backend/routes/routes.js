const express = require("express");
const router = express.Router();

const workoutsActions = require("../actions/api/workoutsActions");
const trainingPlanActions = require("../actions/api/trainingPlanActions");
const userActions = require("../actions/api/userActions");

//excercises plan actions
router.get("/all", workoutsActions.showWorkouts);
router.post("/add", workoutsActions.addWorkout);
router.delete("/excersise/:id", workoutsActions.deleteWorkout);

//training plan actions
router.get("/training-plans", trainingPlanActions.showPlans);
router.get("/training-plan/:id", trainingPlanActions.getPlanById);
router.post("/training-plan", trainingPlanActions.addPlan);
router.put("/edit-plan", trainingPlanActions.editWorkoutInPlan);
// router.get("/edit-plan", trainingPlanActions.findExcById);

//users actions
router.post("/register", userActions.registerUser);
router.post("/login", userActions.loginUser);

//JWT
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = data;
    next();
  });
};
router.get("/admin", authMiddleware, (req, res) => {
  res.send("Witaj w panelu admina");
});

module.exports = router;
