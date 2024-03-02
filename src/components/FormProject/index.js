/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Base from '../../assets/log.png';
import ProjectApi from './Projects/apiBurguer';
import ProjectOne from './Projects/facpbm';
import ProjectMarket from './Projects/marketplace';
import { Container, ContainerItens } from './styles';

function FormProject() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [showProject, setShowProject] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const closeProject = () => {
    setShowProject(false);
    setShowMarket(false);
    setShowThird(false);
    document.body.style.overflow = '';
  };

  const openMarket = () => {
    setShowMarket(true);
    document.body.style.overflow = 'hidden';
  };

  const openProject = () => {
    setShowProject(true);
    document.body.style.overflow = 'hidden';
  };

  const openThird = () => {
    setShowThird(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <Container ref={ref}>
      {inView && (
        <>
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
              <button className="btn-a" onClick={openMarket}>
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
              <button onClick={openThird}>VER DETALHES</button>
            </div>
          </ContainerItens>
        </>
      )}
      {showProject && <ProjectOne onClose={closeProject} />}
      {showMarket && <ProjectMarket onClose={closeProject} />}
      {showThird && <ProjectApi onClose={closeProject} />}
    </Container>
  );
}

export default FormProject;
