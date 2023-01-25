const { ObjectId } = require("mongodb");
const Note = require("../../db/models/note.js");

class NoteActions {
  async saveNote(req, res) {
    //zapisywanie notatki
    const title = req.body.title;
    const body = req.body.body;
    let note;
    try {
      note = await Note({
        title,
        body,
      }).save();
    } catch (error) {
      //obsluga error
      return res.status(422).json({ message: error.message });
    }
    res.status(201).json(note);
  }

  async getAllNotes(req, res) {
    //pobieranie notatek
    let doc;
    try {
      doc = await Note.find({});
      //sztuczne wywołanie błędu w celu sprawdzenia promisa
      // throw new Error("Brak połączenia z bazą daych!");
    } catch (error) {
      //obsluga error
      return res.status(500).json({ message: error.message });
    }
    res.status(200).json(doc);
  }

  async getNote(req, res) {
    let doc;
    try {
      const id = req.params.id;
      doc = await Note.findOne({
        _id: id || ObjectId(id),
      });
    } catch (error) {
      //obsluga error
      return res.status(500).json({ message: error.message });
    }
    res.status(200).json(doc);
  }

  async updateNote(req, res) {
    //aktualiozwanie notatki
    const title = req.body.title;
    const body = req.body.body;
    let doc;
    try {
      const id = req.params.id;
      doc = await Note.findOne({
        _id: id,
      });
      doc.title = title;
      doc.body = body;
      await doc.save();
    } catch (error) {
      //obsluga error
      return res.status(500).json({ message: error.message });
    }
    res.status(201).json(doc);
  }

  async deleteNote(req, res) {
    const id = req.params.id;
    //usuwanie notatki
    await Note.deleteOne({
      _id: id,
    });
    res.sendStatus(204);
  }
}

module.exports = new NoteActions();
