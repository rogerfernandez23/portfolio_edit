/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Curr from '../../assets/curriculo.png';
import GitLogo from '../../assets/git_logo.png';
import InstaLogo from '../../assets/instagram_logo.png';
import LinkLogo from '../../assets/linkedin_logo.png';
import WhatsLogo from '../../assets/whats_logo.png';
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
          <img
            className="lik"
            src={LinkLogo}
            alt="linkedin-logo"
            title="Acesse meu Linkedin"
          />
        </a>

        <a href="https://github.com/rogerfernandez23" target="blank">
          <img
            className="git"
            src={GitLogo}
            alt="github-logo"
            title="Veja meu GitHub"
          />
        </a>

        <a href="https://wa.me/message/PTCJSLROUW5YH1" target="blank">
          <img
            className="whats"
            src={WhatsLogo}
            alt="whats-app-logo"
            title="Fale comigo no Whats App"
          />
        </a>

        <a href="https://www.instagram.com/rogerfernandez_/" target="blank">
          <img
            className="insta"
            src={InstaLogo}
            alt="instagram-logo"
            title="Veja meu Instagram"
          />
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
