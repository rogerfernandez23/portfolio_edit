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
    background-color: black;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;

  @media ${breakepoints.smd} {
    width: 20%;
  }

  .black {
    background-color: none;
    min-height: 100%;
    animation: ${fadeDiv} 1s ease forwards;
    animation-delay: 1.5s;
  }
`;
