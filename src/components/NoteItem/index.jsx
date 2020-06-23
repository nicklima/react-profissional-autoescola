import React, { Component, Fragment } from "react";
import { Save, Close, Trash, Pencil, Arrow } from "../../utils/Icons";

class NoteItem extends Component {
  state = {
    isEditing: false,
    isFocus: false,
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    const { note, onEdit } = this.props;
    onEdit(note.id, this.input.value);
    this.setState({ isEditing: false });
  };

  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { note, index, listQtd, onDelete, onMove } = this.props;
    const { id, text } = note;
    const { isEditing, isFocus } = this.state;

    return (
      <div
        className="note"
        // onMouseEnter={() => !isEditing && this.setState({ isFocus: !isFocus })}
        // onMouseLeave={() => !isEditing && this.setState({ isFocus: !isFocus })}
      >
        {isEditing ? (
          <input
            type="text"
            className="note__input"
            ref={(c) => {
              this.input = c;
            }}
            defaultValue={text}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.handleSave();
              }
            }}
          />
        ) : (
          <span className="note__text">{text}</span>
        )}
        <div
          className={["note__btnWrap", isFocus && "note__btnWrap--active"].join(
            " "
          )}
        >
          {isEditing && (
            <Fragment>
              <button
                onClick={() => this.handleSave()}
                className="note__button note__button--save"
              >
                <Save />
              </button>
              <button
                onClick={() => this.handleCancel()}
                className="note__button note__button--close"
              >
                <Close />
              </button>
            </Fragment>
          )}
          <button
            disabled={isEditing}
            onClick={() => this.handleEdit()}
            className="note__button"
          >
            <Pencil />
          </button>
          <button
            disabled={isEditing}
            onClick={() => onDelete(id)}
            className="note__button"
          >
            <Trash />
          </button>
          <button
            disabled={isEditing || index === 0}
            onClick={() => onMove("up", index)}
            className={["note__button", "note__button--up"].join(" ")}
          >
            <Arrow />
          </button>
          <button
            disabled={isEditing || index === listQtd - 1}
            onClick={() => onMove("down", index)}
            className={["note__button", "note__button--down"].join(" ")}
          >
            <Arrow />
          </button>
        </div>
      </div>
    );
  }
}

export default NoteItem;
