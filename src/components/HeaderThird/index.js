import React from 'react';

import LogoDev from '../../assets/icon_3.png';
import { Container, ContainerItens } from './styles';

function HeaderThird() {
  return (
    <Container>
      <div className="yellow" />
      <ContainerItens>
        <img src={LogoDev} alt="logo-dev" />
      </ContainerItens>
    </Container>
  );
}

export default HeaderThird;
