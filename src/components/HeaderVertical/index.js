import React, { useState, useEffect } from 'react';

import LogoDev from '../../assets/dev_icon.png';
import GitLogo from '../../assets/git_logo.png';
import LinkLogo from '../../assets/linkedin_logo.png';
import { Container, ContainerLogo, ContainerItens, Buttons } from './styles';
import VideoLogo from './videoLogo';

function HeaderVertical() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      {windowWidth >= 1115 ? (
        <ContainerLogo>
          <VideoLogo />
        </ContainerLogo>
      ) : (
        <ContainerLogo>
          <div>
            <img src={LogoDev} alt="logo-dev" className="logo-dev" />
          </div>
        </ContainerLogo>
      )}
      <ContainerItens>
        <Buttons>
          <a href="https://github.com/rogerfernandez23" target="blank">
            <img className="git-logo" src={GitLogo} alt="git-logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/roger-fernandez22/"
            target="blank"
          >
            <img className="link-logo" src={LinkLogo} alt="linkedin-logo" />
          </a>
        </Buttons>
      </ContainerItens>
    </Container>
  );
}

export default HeaderVertical;
