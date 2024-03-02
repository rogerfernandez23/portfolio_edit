import styled, { keyframes } from 'styled-components';

const fadeDiv = keyframes`
  0% {
    transform: translateX(100%);
    height: 0;
  }
  100% {
    height: 70vh;
    background-color: #f39303;
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
  width: 12%;

  .yellow {
    background-color: none;
    animation: ${fadeDiv} 1.5s ease forwards;
    animation-delay: 1.5s;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;

  img {
    opacity: 0;
    width: 90px;
    animation: ${fadeLogo} 1s ease forwards;
    animation-delay: 2.5s;
  }
`;
