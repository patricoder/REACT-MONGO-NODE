const express = require("express");
const router = express.Router();

const workoutsActions = require("../actions/api/workoutsActions");
const trainingPlanActions = require("../actions/api/trainingPlanActions");

router.get("/all", workoutsActions.showWorkouts);

// router.get("/test", workoutsActions.showTests);

// //pobieranie konkretnej notatki
// router.get("/notes/:id", noteActions.getNote);

// //post - zapisywanie nowych danych
router.post("/add", workoutsActions.addWorkout);

// //put - edycja danych
// router.put("/notes/:id", noteActions.updateNote);

// //delete - usunięcie danych
router.delete("/excersise/:id", workoutsActions.deleteWorkout);

router.get("/training-plans", trainingPlanActions.showPlans);
router.get("/training-plan/:id", trainingPlanActions.getPlanById);
router.post("/training-plan", trainingPlanActions.addPlan);

module.exports = router;
