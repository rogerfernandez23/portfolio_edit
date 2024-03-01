import React from 'react';

import LogoDev from '../../assets/icon_2.png';
import { Container, ContainerItens } from './styles';

function HeaderSecond() {
  return (
    <Container>
      <div className="black" />
      <ContainerItens>
        <img src={LogoDev} alt="logo-dev" />
      </ContainerItens>
    </Container>
  );
}

export default HeaderSecond;
