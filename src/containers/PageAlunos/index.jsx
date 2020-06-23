import React, { Fragment } from "react";

import Error from "../../components/Error";
import NoteForm from "../../components/NoteForm";
import NoteList from "../../components/NoteList";

const Alunos = ({
  students,
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
        <h2>Alunos</h2>
      </header>
      <NoteForm onAddNote={onAddNote} />
      {students.length > 0 && (
        <NoteList
          students={students}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />
      )}
    </Fragment>
  );
};

export default Alunos;
