/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 6%;

  .yellow {
    background-color: none;
    min-height: 100vh;
    animation: ${fadeDiv} 1.5s ease forwards;
    animation-delay: 1.5s;

    @media ${breakepoints.bg} {
      min-height: 100%;
    }
  }
`;
