import React, { Fragment } from "react";

import Error from "../../components/Error";
import NoteForm from "../../components/NoteForm";
import NoteList from "../../components/NoteList";

const Aulas = ({
  notes,
  reloadHasError,
  onRetry,
  onAddNote,
  onDelete,
  onEdit,
  onMove,
}) => {
  if (reloadHasError) {
    return <Error onRetry={onRetry} />;
  }
  return (
    <Fragment>
      <header className="headline">
        <h2>Aula Teórica</h2>
      </header>
      <NoteForm onAddNote={onAddNote} />
      {notes.length > 0 && (
        <NoteList
          notes={notes}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />
      )}
    </Fragment>
  );
};

export default Aulas;
