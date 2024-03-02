import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerItens = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  animation: ${fadeIn} 0.4s ease-out;

  .container {
    display: flex;
    flex-direction: row;
  }

  .contents {
    padding: 0 25px;
  }

  h1 {
    font-size: 44px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 40px;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    text-align: justify;
  }

  button {
    position: fixed;
    top: 0;
    right: 0;
    border: none;
    background-color: white;
    color: black;
    font-size: 30px;
    font-weight: 200;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  // IMAGE PROJECT

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 400px;
    height: 280px;
    color: white;
  }

  .background {
    width: 100%;
  }

  // LOGO LINKS ACESS

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .figma-image {
    width: 18px;
    margin-left: 8px;
  }

  .git-image {
    width: 28px;
  }

  .link-image {
    width: 22px;
    margin-left: 4px;
  }

  // TECNOLOGIES

  .tec-image {
    display: flex;
    flex-direction: row;
    gap: 25px;
    cursor: pointer;
  }

  .px {
    width: 30px;
    margin-top: 16px;
    margin-bottom: 30px;
  }

  // DESCRIPTION

  .text {
    display: flex;
    flex-direction: column;
  }
`;
