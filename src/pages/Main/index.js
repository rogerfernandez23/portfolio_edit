/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HeaderButtons from '../../components/HeaderBottons';
import HeaderVertical from '../../components/HeaderVertical';
import Tecnologies from '../../components/Tecnologies';
import { Container, ContainerItens } from './styles';

function Main() {
  return (
    <Container>
      <HeaderVertical />
      <ContainerItens>
        <HeaderButtons />
        <div className="container-text">
          <p>Olá, meu nome é</p>
          <h1>ROGÉRIO FERNANDES</h1>
          <h2>DESENVOLVEDOR FULL-STACK</h2>
          <Tecnologies />
        </div>
      </ContainerItens>
    </Container>
  );
}

export default Main;
