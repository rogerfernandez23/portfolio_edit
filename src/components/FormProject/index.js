/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import Base from '../../assets/log.png';
import ProjectOne from './Projects/facpbm';
import { Container, ContainerItens } from './styles';

function FormProject() {
  const [showProject, setShowProject] = useState(false);

  const closeProject = () => {
    setShowProject(false);
    document.body.style.overflow = '';
  };

  const openProject = () => {
    setShowProject(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <Container>
      <ContainerItens>
        <div className="image">
          <img src={Base} className="background" />
        </div>
        <div className="contents">
          <h2>FEDERAÇÃO ACPBM SITE</h2>
          <button onClick={openProject}>VER DETALHES</button>
        </div>
      </ContainerItens>
      <ContainerItens>
        <div className="image">
          <p />
        </div>
        <div className="contents">
          <h2>MARKETPLACE ACPBM</h2>
          <h3>EM BREVE</h3>
          <button className="btn-a" onClick={openProject}>
            VER DETALHES
          </button>
        </div>
      </ContainerItens>
      <ContainerItens>
        <div className="image">
          <p />
        </div>
        <div className="contents">
          <h2>API DE PEDIDOS</h2>
          <button onClick={openProject}>VER DETALHES</button>
        </div>
      </ContainerItens>
      {showProject && <ProjectOne onClose={closeProject} />}
    </Container>
  );
}

export default FormProject;
