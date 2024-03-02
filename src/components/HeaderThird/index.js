import React from 'react';
import { useInView } from 'react-intersection-observer';

import LogoDev from '../../assets/icon_3.png';
import { Container, ContainerItens } from './styles';

function HeaderThird() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <Container ref={ref}>
      {inView && <div className="yellow" />}
      <ContainerItens>
        {inView && <img src={LogoDev} alt="logo-dev" />}
      </ContainerItens>
    </Container>
  );
}

export default HeaderThird;
