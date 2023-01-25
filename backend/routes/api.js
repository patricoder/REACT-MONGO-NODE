const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/noteActions");

//pobieranie notatek
//zapisywanie notatek
//edytowanie notatek
//usuwanie notatek

//nazwenictwo endpoint do pobierania to liczba mnoga elementu czyli w tym przypadku 'notes'
//get - pobiera
router.get("/notes", noteActions.getAllNotes);

//pobieranie konkretnej notatki
router.get("/notes/:id", noteActions.getNote);

//post - zapisywanie nowych danych
router.post("/notes", noteActions.saveNote);

//put - edycja danych
router.put("/notes/:id", noteActions.updateNote);

//delete - usunięcie danych
router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
