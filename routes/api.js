const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/notes");

router.get("/", noteActions.saveNotes);

module.exports = router;
