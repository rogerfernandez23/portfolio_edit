/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Curr from '../../assets/curriculo.png';
import GitLogo from '../../assets/git_logo.png';
import LinkLogo from '../../assets/linkedin_logo.png';
import Doc from '../../docs/roger_curriculo.pdf';
import { Container, ContainerName, ContainerItens } from './styles';

function Footer() {
  return (
    <Container id="contatos">
      <ContainerName>
        <h1>
          ROGÉRIO <br />
          FERNANDES
        </h1>
        <h2>DESENVOLVEDOR FULL-STACK</h2>
      </ContainerName>
      <ContainerItens>
        <a href="https://www.linkedin.com/in/roger-fernandez22/" target="blank">
          <img className="lik" src={LinkLogo} alt="linkedin" title="Linkedin" />
        </a>

        <a href="https://github.com/rogerfernandez23" target="blank">
          <img className="git" src={GitLogo} alt="github" title="GitHub" />
        </a>

        <a href={Doc} download="roger_curriculo.pdf">
          <img
            className="cur"
            src={Curr}
            alt="curriculo"
            title="Baixe Meu Curricúlo"
          />
        </a>
      </ContainerItens>
    </Container>
  );
}

export default Footer;
