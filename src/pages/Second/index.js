/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Photo from '../../assets/photo.JPG';
import HeaderSecond from '../../components/HeaderSecond';
import { Container, ContainerItens, ContainerText } from './styles';
import Text from './Text/text';

function Second() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <Container id="resumo">
      <ContainerItens ref={ref}>
        {inView && <div className="yellow" />}
        {inView && (
          <ContainerText>
            <div className="photo">
              <img src={Photo} />
            </div>
            <div className="text-container">
              <h1>QUEM É ROGÉRIO?</h1>
              <Text />
            </div>
          </ContainerText>
        )}
      </ContainerItens>
      <HeaderSecond />
    </Container>
  );
}

export default Second;
