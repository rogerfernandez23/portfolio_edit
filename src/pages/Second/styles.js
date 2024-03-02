import styled, { keyframes } from 'styled-components';

import BackImg from '../../assets/background.jpg';

const fadeDiv = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeText = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${BackImg});
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;

  .yellow {
    background-color: #f39303;
    height: 16vh;
    width: 100%;
    animation: ${fadeDiv} 1.5s ease forwards;
  }

  .container-text {
    padding: 50px 80px;
  }

  h1 {
    font-size: 46px;
    font-weight: 800;
    animation: ${fadeText} 1.5s ease forwards;
  }

  p {
    text-align: justify;
    margin-top: 40px;
    font-size: 20px;
    font-weight: 200;
    animation: ${fadeText} 1.5s ease forwards;
  }
`;
