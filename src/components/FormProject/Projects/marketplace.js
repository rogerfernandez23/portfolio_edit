/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import Figma from '../../../assets/figma_logo.png';
import CoverMarket from '../../../assets/marketplace.jpg';
import { Container, ContainerItens } from './styles';

function ProjectMarket({ onClose }) {
  const linkFig =
    'https://www.figma.com/file/sUuaMUm37ASWKBTYlvfL3A/Federa%C3%A7%C3%A3o-ACPBM---Marketplace?type=design&t=fOijp0i7XRsgaRT1-6';
  return (
    <Container>
      <ContainerItens>
        <div className="container">
          <div className="image">
            <img src={CoverMarket} className="background" />
          </div>
          <div className="contents">
            <h1 className="market-h1">FEDERAÇÃO ACPBM - MARKETPLACE</h1>
            <div className="contents-header">
              <p className="status status-market">EM BREVE</p>
            </div>
            <div className="links">
              <nav>
                <img src={Figma} className="figma-image" />
                <a href={linkFig} target="blank">
                  Projeto no Figma
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

export default ProjectMarket;

ProjectMarket.propTypes = {
  onClose: PropTypes.func.isRequired
};
