import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

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
`;

export const ContainerItens = styled.div`
  width: 100%;

  .black {
    background-color: black;
    height: 10vh;
    width: 100%;
    animation: ${fadeDiv} 1.5s ease forwards;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media ${breakepoints.bg} {
    padding: 50px;
  }

  @media ${breakepoints.sm} {
    padding: 10px;
  }

  .project-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    padding: 20px;
    width: 95%;
    height: 78vh;

    @media ${breakepoints.bg} {
      height: 100%;
      width: 80%;
    }

    @media ${breakepoints.smd} {
      height: 100%;
      width: 100%;
    }
  }

  .h1 {
    opacity: 0;
    font-size: 44px;
    font-weight: 900;
    animation: ${fadeText} 1.5s ease forwards;
    animation-delay: 1.5s;

    @media ${breakepoints.sm} {
      font-size: 30px;
    }
  }
`;
