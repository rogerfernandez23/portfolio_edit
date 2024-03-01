import styled from 'styled-components';

import BackImg from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${BackImg});
`;

export const ContainerItens = styled.div`
  width: 100%;

  .black {
    background-color: black;
    height: 14vh;
    width: 100%;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .project-label {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    width: 95%;
    height: 78vh;
  }

  h1 {
    font-size: 44px;
    font-weight: 900;
  }
`;
