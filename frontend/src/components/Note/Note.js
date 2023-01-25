import React from "react";
import "./Note.css";

const Note = ({ note }) => {
  const { title, body } = note;
  return (
    <div className="notes__card">
      <p className="notes__cardTitle">{title}</p>
      <div className="notes__cardDesc">{body} </div>
      <div className="notes__buttons">
        <button className="notes__button notes__button--edit">edytuj</button>
        <button className="notes__button notes__button--delete">usuń</button>
      </div>
    </div>
  );
};

export default Note;
