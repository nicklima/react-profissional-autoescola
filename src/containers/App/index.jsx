import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { uuid } from "uuidv4";

import Home from "../PageHome";
import About from "../PageAbout";
import Alunos from "../PageAlunos";
import Aulas from "../PageAulas";
import StorageNotes from "../../services/StorageNotes";
import Menu from "../../components/Menu";

class App extends Component {
  state = {
    notes: [],
    students: [],
    isLoading: false,
    reloadHasError: false,
    saveHasError: false,
  };

  componentDidCatch() {
    this.setState({ reloadHasError: true });
  }

  componentDidMount() {
    this.handleReload();
  }

  // Save Notes
  handleSave = (notes) => {
    this.setState({ isLoading: true });
    StorageNotes.save(notes)
      .then(() => {
        this.setState({ isLoading: false, saveHasError: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, saveHasError: true });
      });
  };

  // Reload Notes
  handleReload = () => {
    this.setState({ isLoading: true, reloadHasError: false });
    StorageNotes.load()
      .then((notes) => {
        this.setState({ notes, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, reloadHasError: true });
      });
  };

  // Add Note
  handleAddNote = (value) => {
    this.setState((prevState) => {
      const notes = prevState.notes.concat({ id: uuid(), text: value });
      this.handleSave(notes);
      return { notes };
    });
  };

  // Move Note
  handleMove = (direction, index) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.slice();
      const removedNote = newNotes.splice(index, 1)[0];

      if (direction === "up") newNotes.splice(index - 1, 0, removedNote);
      else newNotes.splice(index + 1, 0, removedNote);

      this.handleSave(newNotes);

      return {
        notes: newNotes,
      };
    });
  };

  // Edit Note
  handleEdit = (id, text) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex((n) => n.id === id);
      newNotes[index].text = text;

      this.handleSave(newNotes);

      return {
        notes: newNotes,
      };
    });
  };

  // Delete Note
  handleDelete = (id) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex((n) => n.id === id);
      newNotes.splice(index, 1);

      this.handleSave(newNotes);

      return {
        notes: newNotes,
      };
    });
  };

  render() {
    const {
      isMenuOpen,
      isLoading,
      saveHasError,
      reloadHasError,
      notes,
      students,
    } = this.state;
    return (
      <Router>
        <div className="main">
          <Menu
            isLoading={isLoading}
            saveHasError={saveHasError}
            onSaveRetry={() => this.handleSave(notes)}
          />
          <section className="wrapper">
            <div className="container">
              <Fragment>
                <Route path="/" exact render={(props) => <Home />} />
                <Route
                  path="/alunos"
                  exact
                  render={(props) => (
                    <Alunos
                      students={students}
                      reloadHasError={reloadHasError}
                      onRetry={this.handleReload}
                      onAddNote={this.handleAddNote}
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                      onMove={this.handleMove}
                    />
                  )}
                />
                <Route
                  path="/aulas"
                  exact
                  render={(props) => (
                    <Aulas
                      notes={notes}
                      reloadHasError={reloadHasError}
                      onRetry={this.handleReload}
                      onAddNote={this.handleAddNote}
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                      onMove={this.handleMove}
                    />
                  )}
                />
                <Route path="/sobre" exact component={About} />
              </Fragment>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
