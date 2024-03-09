import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

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

  @media ${breakepoints.md} {
    flex-direction: column;
  }
`;

export const ContainerItens = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  @media ${breakepoints.md} {
    padding: none;
  }

  .container-text {
    margin-top: 80px;
    margin-left: 100px;

    @media ${breakepoints.in} {
      margin-left: 30px;
      padding: 0px;
    }

    @media ${breakepoints.sm} {
      margin-left: 0px;
      padding: 0px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-left: 5px;
    opacity: 0;
    animation: ${fadeInName} 0.5s ease forwards;
    animation-delay: 0.5s;

    @media ${breakepoints.md} {
      font-size: 12px;
    }
  }

  h1 {
    font-size: 100px;
    font-weight: 900;
    letter-spacing: 2px;
    opacity: 0;
    animation: ${fadeInName} 0.5s ease forwards;
    animation-delay: 1s;

    @media ${breakepoints.bg} {
      font-size: 80px;
    }

    @media ${breakepoints.smf} {
      font-size: 60px;
    }

    @media ${breakepoints.sm} {
      font-size: 48px;
    }

    @media ${breakepoints.mn} {
      font-size: 44px;
    }
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

    @media ${breakepoints.bg} {
      font-size: 34px;
      margin-top: 10px;
    }

    @media ${breakepoints.md} {
      font-size: 32px;
    }

    @media ${breakepoints.smf} {
      font-size: 24px;
    }

    @media ${breakepoints.sm} {
      font-size: 22px;
      margin-top: 0;
    }

    @media ${breakepoints.mn} {
      font-size: 20px;
    }
  }
`;
