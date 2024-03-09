/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import breakepoints from '../../../styles/breakepoints';

const fadeText = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.p`
  opacity: 0;
  text-align: justify;
  margin-top: 50px;
  font-size: 18px;
  font-weight: 400;
  animation: ${fadeText} 1.5s ease forwards;
  animation-delay: 0.5s;

  @media ${breakepoints.in} {
    font-size: 16px;
  }

  @media ${breakepoints.md} {
    font-size: 14px;
  }

  @media ${breakepoints.sm} {
    font-size: 10px;
    margin-bottom: 30px;
  }
`;
