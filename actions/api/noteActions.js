const Note = require("../../db/models/note.js");

class NoteActions {
  saveNote(req, res) {
    //zapisywanie notatki
    const newNote = new Note({
      title: "Zagotować wode",
      body: "Zagotować 1l wody",
    });
    newNote;
    // .save()
    // .then(() => {
    //   console.log("Dodawanie notatki...");
    // })
    // .catch((error) => {
    //   console.log("An error occured: ", error);
    // });

    const title = req.body.title;
    const body = req.body.body;

    res.send("Dodano notatke " + title + " treść: " + body);
  }

  getAllNotes(req, res) {
    //pobieranie notatek
    res.send("API działa!");
  }

  getNote(req, res) {
    //pobieranie notatki
    res.send("Info o notatce");
  }

  updateNote(req, res) {
    //aktualiozwanie notatki
    res.send("Aktualizacja notatki");
  }

  deleteNote(req, res) {
    const id = req.params.id;
    //usuwanie notatki
    res.send("Usuwanie notatki o ID: " + id);
  }
}

module.exports = new NoteActions();
