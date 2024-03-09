import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

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
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;

  .yellow {
    background-color: #f39303;
    height: 10vh;
    width: 100%;
    animation: ${fadeDiv} 1.5s ease forwards;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    padding: 80px 100px;

    @media ${breakepoints.bg} {
      padding: 50px;
    }

    @media ${breakepoints.smd} {
      padding: 25px;
    }

    @media ${breakepoints.sm} {
      padding: 0 25px;
    }
  }

  .photo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    animation: ${fadeText} 1.5s ease forwards;

    @media ${breakepoints.al} {
      margin-left: 30px;
    }

    @media ${breakepoints.smd} {
      margin-left: 0;
      margin: 40px 0;
    }

    @media ${breakepoints.sm} {
      margin-top: 20px;
    }
  }

  img {
    width: 300px;
    border-radius: 50%;

    @media ${breakepoints.in} {
      width: 250px;
    }

    @media ${breakepoints.md} {
      width: 200px;
    }

    @media ${breakepoints.sm} {
      width: 150px;
    }
  }

  h1 {
    font-size: 52px;
    font-weight: 800;
    animation: ${fadeText} 1.5s ease forwards;

    @media ${breakepoints.al} {
      font-size: 36px;
    }

    @media ${breakepoints.md} {
      font-size: 30px;
    }

    @media ${breakepoints.smd} {
      text-align: center;
      font-size: 36px;
    }

    @media ${breakepoints.sm} {
      font-size: 24px;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakepoints.smd} {
    flex-direction: column;
  }
`;
