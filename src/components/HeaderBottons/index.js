/* eslint-disable react/button-has-type */
import React from 'react';

import { Container, ContainerItens } from './styles';

function HeaderButtons() {
  return (
    <Container>
      <ContainerItens>
        <a href="#resumo">
          <button className="first">Resumo</button>
        </a>
        <a href="#projetos">
          <button className="second">Projetos</button>
        </a>
        <a href="#contatos">
          <button className="third">Contatos</button>
        </a>
      </ContainerItens>
    </Container>
  );
}

export default HeaderButtons;
