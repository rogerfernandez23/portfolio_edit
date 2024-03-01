/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import FormProject from '../../components/FormProject';
import HeaderThird from '../../components/HeaderThird';
import { Container, ContainerItens, ContainerProjects } from './styles';

function Third() {
  return (
    <Container id="projetos">
      <HeaderThird />
      <ContainerItens>
        <div className="black" />
        <ContainerProjects>
          <div className="project-label">
            <h1>PROJETOS</h1>
            <FormProject />
          </div>
        </ContainerProjects>
      </ContainerItens>
    </Container>
  );
}

export default Third;
