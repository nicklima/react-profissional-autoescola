import React from "react";
import SocialNetwork from "../../components/SocialNetwork";
import Social from "../../utils/Data/social.json";

const About = () => (
  <div className="about">
    <h1>Sobre o projeto</h1>
    <p>
      Esse projeto foi desenvolvido durante as aulas do curso <br />
      <a
        href="https://www.udemy.com/course/react-redux-profissional/"
        target="_blank"
      >
        REACT PROFISSIONAL
      </a>{" "}
      de autoria de Bruno Nardini. O projeto teve algumas alterações de layout
      mas a essência foi mantida.
    </p>
    <SocialNetwork data={Social.bruno} />
    <h2>Sobre o Desenvolvedor</h2>
    <p>
      Sou Desenvolvedor Front-end com foco em Gatsby/React, Wordpress,
      CSS/SASS/PostCSS. <br /> <br />
      Trabalho no setor desde 2005 e já desenvolvi grandes projetos, como o site
      dos cantores "Wesley Safadão" e "Aldair Playboy", o Portal "Investimentos
      para Você" e vários outros.
    </p>
    <SocialNetwork data={Social.nick} />
    <h2>Objetivos</h2>
    <p>
      Apesar de já atuar na área, decidi fazer o curso do Nardini com o objetivo
      de fazer um reciclagem e também ganhar um melhor embasamento teórico e
      dessa forma melhorar ainda mais como desenvolvedor.
    </p>
    <h2>Icons made by:</h2>
    <div>
      <a
        href="https://www.flaticon.com/authors/pongsakornred"
        title="pongsakornRed"
      >
        pongsakornRed
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    <div>
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </div>
);

export default About;
