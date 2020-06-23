import React, { Component } from "react";

class NoteForm extends Component {
  state = {
    text: "",
  };

  render() {
    const { onAddNote } = this.props;
    const { text } = this.state;

    return (
      <div className="new-note">
        <input
          className="new-note__input"
          placeholder="Digite sua nota aqui..."
          type="text"
          value={text}
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value != "") {
              onAddNote(e.target.value);
              this.setState({
                text: "",
              });
            }
          }}
        />
      </div>
    );
  }
}

export default NoteForm;
