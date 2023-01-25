import React, { Component } from "react";
import Note from "../Note/Note";
import "./Notes.css";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.notes = [
      {
        _id: 123123123,
        title: "Wykąpać psa!",
        body: "Pamiętaj żeby wykąpać psa specjalnym szamponem!",
      },
      {
        _id: 5141234,
        title: "Wykąpać psa!",
        body: "Pamiętaj żeby wykąpać psa specjalnym szamponem!",
      },
    ];
  }
  render() {
    return (
      <div className="notes">
        <p className="notes__title">Moje notatki:</p>
        {this.notes.map((item) => {
          return <Note note={item} key={item._id} />;
        })}
      </div>
    );
  }
}

export default Notes;
