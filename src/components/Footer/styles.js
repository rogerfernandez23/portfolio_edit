import styled from 'styled-components';

import CurLogoColor from '../../assets/curriculo_color.png';
import GitLogoOrange from '../../assets/git_logo_orange.png';
import LinkLogoBlue from '../../assets/linkedin_logo_blue.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background-color: black;
  width: 100%;
  height: 30vh;
  padding: 50px;
`;

export const ContainerItens = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 40px;
    cursor: pointer;
    transition: transform 0.8s ease;

    &:hover {
      transform: scale(1.08);
    }
  }

  .git {
    &:hover {
      content: url(${GitLogoOrange});
    }
  }

  .lik {
    &:hover {
      content: url(${LinkLogoBlue});
    }
  }

  .cur {
    width: 42px;
    &:hover {
      content: url(${CurLogoColor});
    }
  }
`;

export const ContainerName = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 800;
    color: white;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #f39303;
  }
`;
