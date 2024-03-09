import styled, { keyframes } from 'styled-components';

import GitLogoOrange from '../../assets/git_logo_orange.png';
import LinkLogoBlue from '../../assets/linkedin_logo_blue.png';
import breakepoints from '../../styles/breakepoints';

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInButtons = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media ${breakepoints.md} {
    display: flex;
    flex-direction: row;
    height: 10%;
  }

  @media ${breakepoints.in} {
    align-items: initial;
    justify-content: initial;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  cursor: pointer;

  @media ${breakepoints.md} {
    height: 15vh;
    width: 25%;
  }

  @media ${breakepoints.sm} {
    width: 30%;
    height: 12vh;
  }

  .logo-dev {
    width: 200px;

    @media ${breakepoints.in} {
      width: 150px;
    }

    @media ${breakepoints.md} {
      width: 120px;
    }

    @media ${breakepoints.sm} {
      width: 80px;
    }
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  gap: 30px;
  width: 100%;
  height: 70vh;
  background-color: black;
  animation: ${fadeInFromLeft} 1s ease-in-out;

  @media ${breakepoints.md} {
    height: 16vh;
    align-items: center;
    justify-content: end;
    padding: 0 25px;
  }

  @media ${breakepoints.sm} {
    height: 12vh;
  }
`;

export const Buttons = styled.div`
  animation: ${fadeInButtons} 2s ease-in-out;
  margin-bottom: 20px;
  cursor: pointer;

  @media ${breakepoints.in} {
    margin-bottom: 40px;
  }

  @media ${breakepoints.md} {
    margin-bottom: 0px;
  }

  .git-logo {
    width: 50px;
    transition: transform 0.6s ease;

    @media ${breakepoints.in} {
      width: 40px;
    }

    @media ${breakepoints.sm} {
      width: 30px;
    }

    &:hover {
      content: url(${GitLogoOrange});
      transform: scale(1.1);
    }

    &:active {
      content: url(${GitLogoOrange});
      opacity: 0.8;
    }
  }

  .link-logo {
    width: 50px;
    margin-left: 20px;
    transition: transform 0.6s ease;

    @media ${breakepoints.in} {
      width: 40px;
    }

    @media ${breakepoints.sm} {
      width: 30px;
    }

    &:hover {
      content: url(${LinkLogoBlue});
      transform: scale(1.05);
    }

    &:active {
      content: url(${LinkLogoBlue});
      opacity: 0.8;
    }
  }
`;
