/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import CoverMarket from '../../assets/marketplace.jpg';
import CoverApi from '../../assets/model_api.jpg';
import Cover from '../../assets/model.jpg';
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
              <img src={Cover} className="background" />
            </div>
            <div className="contents">
              <h2>FEDERAÇÃO ACPBM SITE</h2>
              <p>
                Projeto que reúne as funcionalidades de uma federação
                organizadora de competições em um único local. Um gerenciador de{' '}
                <b>equipes</b>, <b>campeonatos</b>,<b> notícias</b> e{' '}
                <b>informações</b> feito para cada integrante e visitante.
              </p>
              <button onClick={openProject}>VER DETALHES</button>
            </div>
          </ContainerItens>
          <ContainerItens>
            <div className="image">
              <img src={CoverMarket} className="background" />
            </div>
            <div className="contents">
              <h2>MARKETPLACE ACPBM</h2>
              <p>
                Futura aplicação de plataforma de venda de produtos, utilizando
                conceitos de cadastro e exibição de produtos, com métodos de
                carrinho e pagamento on-line. A ser desenvolvida com{' '}
                <b>React</b> e <b>Typescript</b>.
              </p>
              <button className="btn-a" onClick={openMarket}>
                VER DETALHES
              </button>
            </div>
          </ContainerItens>
          <ContainerItens>
            <div className="image">
              <img src={CoverApi} className="background" />
            </div>
            <div className="contents">
              <h2>API DE PEDIDOS HAMBURGUERIA</h2>
              <p>
                Uma aplicação em <b>React</b> que faz cadastros de pedidos de
                uma Lanchonete, com rotas em back-end utilizando <b>Node.js</b>{' '}
                aplicando o conceito de CRUD.
              </p>
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
