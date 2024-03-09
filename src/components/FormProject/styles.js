import styled, { keyframes } from 'styled-components';

import breakepoints from '../../styles/breakepoints';

const fadeForm = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  @media ${breakepoints.bg} {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const ContainerItens = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 60vh;
  border-radius: 50px;
  animation: ${fadeForm} 1s ease forwards;
  animation-delay: 1.5s;

  @media ${breakepoints.bg} {
    width: 60%;
    height: 50vh;
  }

  @media ${breakepoints.in} {
    width: 70%;
  }

  @media ${breakepoints.md} {
    width: 80%;
  }

  @media ${breakepoints.sm} {
    width: 100%;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 24vh;
    margin-bottom: 30px;

    @media ${breakepoints.sm} {
      height: 20vh;
    }
  }

  .background {
    width: 100%;
    max-height: 26vh;
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    width: 40%;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    padding: 0 10px;
  }

  button {
    width: 60%;
    height: 5vh;
    color: white;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    background-color: green;
    font-size: 14px;
    font-weight: 600;
    transition: transform 0.2s ease;
    margin-top: 10px;

    @media ${breakepoints.in} {
      margin-top: 20px;
    }

    &:hover {
      transform: scale(1.02);
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }
`;
