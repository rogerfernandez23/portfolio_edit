/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

const fadeLogos = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  gap: 20px;
  margin-left: 5px;

  img {
    opacity: 0;
    width: 30px;
    cursor: pointer;
    animation: ${fadeLogos} 1.5s ease forwards;
  }

  .js {
    animation-delay: 4s;
  }

  .react {
    animation-delay: 3.8s;
  }

  .node {
    animation-delay: 3.6s;
  }

  .docker {
    animation-delay: 3.4s;
  }

  .postgres {
    animation-delay: 3.2s;
  }

  .mongodb {
    animation-delay: 3s;
  }
`;
