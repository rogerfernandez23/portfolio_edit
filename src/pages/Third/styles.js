import styled, { keyframes } from 'styled-components';

import BackImg from '../../assets/background.jpg';

const fadeDiv = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeText = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
    animation: ${fadeDiv} 1.5s ease forwards;
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

  .header {
    opacity: 0;
    font-size: 44px;
    font-weight: 900;
    animation: ${fadeText} 1.5s ease forwards;
    animation-delay: 1.5s;
  }
`;
