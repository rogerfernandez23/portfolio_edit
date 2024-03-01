import React from 'react';

import LogoDev from '../../assets/dev_icon.png';
import GitLogo from '../../assets/git_logo.png';
import LinkLogo from '../../assets/linkedin_logo.png';
import { Container, ContainerLogo, ContainerItens, Buttons } from './styles';

function HeaderVertical() {
  return (
    <Container>
      <ContainerLogo>
        <img className="logo-dev" src={LogoDev} alt="dev-logo" />
      </ContainerLogo>
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