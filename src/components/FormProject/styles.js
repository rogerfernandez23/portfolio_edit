import styled, { keyframes } from 'styled-components';

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

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 75%;
    height: 28vh;
    margin-bottom: 15px;
  }

  .background {
    width: 100%;
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

  h3 {
    text-align: center;
    font-size: 8px;
    color: red;
    border: red 2px solid;
    border-radius: 10px;
    font-weight: 900;
    width: 20%;
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
    margin-top: 50px;

    &:hover {
      transform: scale(1.02);
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }

  .btn-a {
    margin-top: 30px;
  }
`;
