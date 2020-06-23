import React from "react";
import NoteItem from "../NoteItem";

const NoteList = ({ notes, onDelete, onEdit, onMove }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => {
        return (
          <NoteItem
            index={index}
            key={note.id}
            note={note}
            listQtd={notes.length}
            onEdit={onEdit}
            onDelete={onDelete}
            onMove={onMove}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
