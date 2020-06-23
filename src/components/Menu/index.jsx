import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import { Save, Reload } from "../../utils/Icons";
import MenuSide from "../MenuSide";

class Menu extends Component {
  state = { isMenuOpen: false };

  handleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  render() {
    const { isMenuOpen } = this.state;
    const { isLoading, saveHasError, onSaveRetry, history } = this.props;
    return (
      <Fragment>
        <header className="header">
          <div className="header__container">
            <div className="header__menuWrap">
              <button className="btnNav" onClick={() => this.handleMenu()}>
                <div
                  className={[
                    "btnNav__holder",
                    isMenuOpen && "btnNav__holder--open",
                  ].join(" ")}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <h1
                onClick={() => {
                  isMenuOpen && this.handleMenu();
                  history.push("/");
                }}
              >
                <span>Auto Escola Senna</span>
              </h1>
              {isLoading && (
                <button
                  className={[
                    "button",
                    "button--loading",
                    isLoading && "button--show",
                  ].join(" ")}
                >
                  <Reload />
                </button>
              )}
              {!isLoading && saveHasError && (
                <button
                  onClick={onSaveRetry}
                  className={[
                    "button",
                    "button--saving",
                    "button--error",
                    "button--show",
                  ].join(" ")}
                >
                  <Save />
                </button>
              )}
            </div>
          </div>
        </header>
        <MenuSide
          isMenuOpen={isMenuOpen}
          handleMenu={() => this.handleMenu()}
        />
      </Fragment>
    );
  }
}

export default withRouter(Menu);
