import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

const fadeInButtons = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  max-height: 18vh;

  @media ${breakepoints.in} {
    justify-content: end;
  }

  @media ${breakepoints.md} {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const ContainerItens = styled.div`
  @media ${breakepoints.md} {
    display: flex;
  }

  a {
    opacity: 0;
    animation: ${fadeInButtons} 0.5s ease forwards;
    animation-delay: 0.3s;
  }

  .first {
    width: 120px;
    height: 30px;
    border-radius: 18px;
    border: none;
    background-color: #f39303;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-duration: 0.5s;
    font-size: 16px;
    font-weight: 500;

    @media ${breakepoints.bg} {
      width: 100px;
      height: 25px;
      font-size: 12px;
    }

    @media ${breakepoints.md} {
      width: 120px;
      height: 25px;
    }

    @media ${breakepoints.sm} {
      width: 80px;
      height: 25px;
    }

    &:hover {
      opacity: 0.9;
      transform: scale(1.03);
    }

    &:active {
      opacity: 0.6;
    }
  }

  .second {
    width: 120px;
    height: 30px;
    margin-left: 30px;
    border-radius: 18px;
    border: none;
    background-color: #f39303;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-duration: 0.5s;
    font-size: 16px;
    font-weight: 500;

    @media ${breakepoints.bg} {
      width: 100px;
      height: 25px;
      font-size: 12px;
    }

    @media ${breakepoints.md} {
      width: 120px;
      height: 25px;
    }

    @media ${breakepoints.sm} {
      width: 80px;
      height: 25px;
    }

    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }

    &:active {
      opacity: 0.6;
    }
  }

  .third {
    width: 120px;
    height: 30px;
    margin-left: 30px;
    border-radius: 18px;
    border: none;
    background-color: #f39303;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-duration: 0.5s;
    font-size: 16px;
    font-weight: 500;

    @media ${breakepoints.bg} {
      width: 100px;
      height: 25px;
      font-size: 12px;
    }

    @media ${breakepoints.md} {
      width: 120px;
      height: 25px;
    }

    @media ${breakepoints.sm} {
      width: 80px;
      height: 25px;
    }

    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }

    &:active {
      opacity: 0.6;
    }
  }
`;
