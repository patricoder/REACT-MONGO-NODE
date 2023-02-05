const express = require("express");
const router = express.Router();

const workoutsActions = require("../actions/api/workoutsActions");

//nazwenictwo endpoint do pobierania to liczba mnoga elementu czyli w tym przypadku 'notes'
//get - pobiera
router.get("/all", workoutsActions.showWorkouts);

// router.get("/test", workoutsActions.showTests);

// //pobieranie konkretnej notatki
// router.get("/notes/:id", noteActions.getNote);

// //post - zapisywanie nowych danych
router.post("/add", workoutsActions.addWorkout);

// //put - edycja danych
// router.put("/notes/:id", noteActions.updateNote);

// //delete - usunięcie danych
// router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
