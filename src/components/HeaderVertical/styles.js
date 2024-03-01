import styled from 'styled-components';

import GitLogoOrange from '../../assets/git_logo_orange.png';
import LinkLogoBlue from '../../assets/linkedin_logo_blue.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  cursor: pointer;

  .logo-dev {
    width: 200px;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  gap: 30px;
  width: 100%;
  min-height: 70vh;
  background-color: black;
`;

export const Buttons = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  .git-logo {
    width: 50px;
    transition: transform 0.6s ease;

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
