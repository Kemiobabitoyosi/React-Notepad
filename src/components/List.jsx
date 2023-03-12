import React from "react";
import { AiFillDelete } from "react-icons/ai";

function List({ notes, deleteList }) {
  // setNotes([newNotes, ...notes]);

  return (
    <div className="lists">
      {notes.map((note) => (
        <div key={note.id} className="list">
          <div className="header">
            <h2 className="titlePreview">{note.title}</h2>
            <button className="delPreview">
              <AiFillDelete onClick={() =>deleteList(note.id)} />
            </button>
          </div>
          <div className="notePreview">{note.body}</div>
          <div className="date">{note.lastModified}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
