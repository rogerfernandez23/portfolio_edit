import styled, { keyframes } from 'styled-components';

const fadeDiv = keyframes`
  0% {
    transform: translateX(100%);
    height: 0;
  }
  100% {
    height: 70vh;
    background-color: black;
    transform: translateX(0);
  }
`;

const fadeLogo = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .black {
    background-color: none;
    animation: ${fadeDiv} 1s ease forwards;
    animation-delay: 1.5s;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;

  img {
    opacity: 0;
    width: 100px;
    animation: ${fadeLogo} 1s ease forwards;
    animation-delay: 2.5s;
  }
`;
