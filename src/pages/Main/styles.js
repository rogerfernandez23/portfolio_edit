import styled, { keyframes } from 'styled-components';

import BackImg from '../../assets/background.jpg';

const fadeInName = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeInWork = keyframes`
  0% {
    width: 0;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    width: 100%;
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
  padding: 30px;
  display: flex;
  flex-direction: column;

  .container-text {
    margin-top: 80px;
    margin-left: 100px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-left: 5px;
    opacity: 0;
    animation: ${fadeInName} 0.5s ease forwards;
    animation-delay: 0.5s;
  }

  h1 {
    font-size: 100px;
    font-weight: 900;
    letter-spacing: 2px;
    opacity: 0;
    animation: ${fadeInName} 0.5s ease forwards;
    animation-delay: 1s;
  }

  h2 {
    font-size: 44px;
    font-weight: 700;
    color: #f39303;
    letter-spacing: -2px;
    margin-top: 16px;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    animation: ${fadeInWork} 3s steps(44) forwards;
    animation-delay: 1.5s;
    border-right: 2px solid transparent;
  }
`;
