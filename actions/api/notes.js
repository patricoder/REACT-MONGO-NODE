const Note = require("../../db/models/note.js");

module.exports = {
  saveNotes(req, res) {
    const newNote = new Note({
      title: "Zagotować wode",
      body: "Zagotować 1l wody",
    });
    newNote
      .save()
      .then(() => {
        console.log("Dodawanie notatki...");
      })
      .catch((error) => {
        console.log("An error occured: ", error);
      });

    res.send("Strona główna działa!");
  },
};
