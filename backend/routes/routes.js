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
router.get("/edit-plan", trainingPlanActions.findExcById);

//users actions
router.post("/user", userActions.registerUser);
router.get("/user", userActions.loginUser)

module.exports = router;
