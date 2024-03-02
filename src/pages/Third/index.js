/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useInView } from 'react-intersection-observer';

import FormProject from '../../components/FormProject';
import HeaderThird from '../../components/HeaderThird';
import { Container, ContainerItens, ContainerProjects } from './styles';

function Third() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <Container ref={ref} id="projetos">
      <HeaderThird />
      <ContainerItens>
        {inView && <div className="black" />}
        <ContainerProjects>
          <div className="project-label">
            {inView && (
              <>
                <h1 className="header">PROJETOS</h1>
                <FormProject />
              </>
            )}
          </div>
        </ContainerProjects>
      </ContainerItens>
    </Container>
  );
}

export default Third;
