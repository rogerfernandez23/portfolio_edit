/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import Docker from '../../../assets/docker_logo.png';
import Figma from '../../../assets/figma_logo.png';
import JS from '../../../assets/js_logo.png';
import LinkI from '../../../assets/link_logo.png';
import Base from '../../../assets/log.png';
import Node from '../../../assets/node_logo.png';
import Postgres from '../../../assets/postgres_logo.png';
import ReactImg from '../../../assets/react_logo.png';
import Git from '../../../assets/rep_logo.png';
import { Container, ContainerItens } from './styles';

function ProjectOne({ onClose }) {
  const linkFig =
    'https://www.figma.com/file/0R8gWb4hbQfOoBXIbRD1TA/Portf%C3%B3lio?type=design&t=FP8NSuZ5Txi9N0am-6';
  const linkRep = 'https://github.com/rogerfernandez23/acpbm-site';

  return (
    <Container>
      <ContainerItens>
        <div className="container">
          <div className="image">
            <img src={Base} className="background" />
          </div>
          <div className="contents">
            <h1>FEDERAÇÃO ACPBM - SITE</h1>
            <p>Tecnologias:</p>
            <div className="tec-image">
              <img src={ReactImg} className="px" title="React" />
              <img src={JS} className="px" title="Java-Script" />
              <img src={Node} className="px" title="Node.js" />
              <img src={Postgres} className="px" title="PostgeSQL" />
              <img src={Docker} className="px" title="Docker" />
            </div>

            <div className="links">
              <nav>
                <img src={Figma} className="figma-image" />
                <a href={linkFig} target="blank">
                  Projeto no Figma
                </a>
              </nav>

              <nav>
                <img src={LinkI} className="link-image" />
                <a href={linkFig} target="blank">
                  Deploy do projeto
                </a>
              </nav>

              <nav>
                <img src={Git} className="git-image" />
                <a href={linkRep} target="blank">
                  Repositório Git
                </a>
              </nav>
            </div>
          </div>
        </div>
        <button onClick={onClose}>x</button>

        <div className="text">
          <h2>DESCRIÇÃO</h2>
          <p>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </ContainerItens>
    </Container>
  );
}

export default ProjectOne;

ProjectOne.propTypes = {
  onClose: PropTypes.func.isRequired
};
