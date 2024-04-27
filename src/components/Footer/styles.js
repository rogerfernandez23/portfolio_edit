import styled from 'styled-components';

import CurLogoColor from '../../assets/curriculo_color.png';
import GitLogoOrange from '../../assets/git_logo_orange.png';
import InstaLogoColor from '../../assets/instagram_logo_color.png';
import LinkLogoBlue from '../../assets/linkedin_logo_blue.png';
import WhatsColor from '../../assets/whats_logo_color.png';
import breakepoints from '../../styles/breakepoints';

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

  @media ${breakepoints.smd} {
    padding: 30px;
    gap: 40px;
  }

  @media ${breakepoints.sm} {
    height: 20vh;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  gap: 20px;

  @media ${breakepoints.smf} {
    gap: 10px;
  }

  img {
    width: 40px;
    cursor: pointer;
    transition: transform 0.8s ease;

    @media ${breakepoints.smd} {
      width: 35px;
    }

    @media ${breakepoints.smf} {
      width: 25px;
    }

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

  .whats {
    &:hover {
      content: url(${WhatsColor});
    }
  }

  .insta {
    &:hover {
      content: url(${InstaLogoColor});
    }
  }

  .cur {
    width: 42px;

    @media ${breakepoints.smd} {
      width: 35px;
    }

    @media ${breakepoints.smf} {
      width: 28px;
    }

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

    @media ${breakepoints.smd} {
      font-size: 24px;
    }

    @media ${breakepoints.smf} {
      font-size: 20px;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #f39303;

    @media ${breakepoints.md} {
      font-size: 12px;
    }

    @media ${breakepoints.smd} {
      font-size: 10px;
    }

    @media ${breakepoints.smf} {
      font-size: 8px;
    }
  }
`;
