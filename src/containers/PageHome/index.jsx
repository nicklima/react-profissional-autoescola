import React from "react";
import { withRouter } from "react-router-dom";

import { Classes, Student } from "../../utils/Icons";

const Home = ({ history }) => (
  <div className="home">
    <div className="headline">
      <h2>Serviços</h2>
    </div>
    <div className="sistemButtons">
      <ul className="sistemButtons__list">
        <li
          className="sistemButtons__item"
          onClick={() => {
            history.push("/aulas");
          }}
        >
          <Classes color="#000" />
          <span>Aula Teórica</span>
        </li>
      </ul>
    </div>
    <div className="headline">
      <h2>Cadastros</h2>
    </div>
    <div className="sistemButtons">
      <ul className="sistemButtons__list">
        <li
          className="sistemButtons__item"
          onClick={() => {
            history.push("/alunos");
          }}
        >
          <Student color="#000" />
          <span>Alunos</span>
        </li>
      </ul>
    </div>
  </div>
);

export default withRouter(Home);
