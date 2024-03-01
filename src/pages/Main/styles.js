import styled from 'styled-components';

import BackImg from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${BackImg});
`;

export const ContainerItens = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  .container-text {
    margin-top: 80px;
    margin-left: 100px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-left: 5px;
  }

  h1 {
    font-size: 100px;
    font-weight: 900;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 44px;
    font-weight: 700;
    color: #f39303;
    letter-spacing: -2px;
    margin-top: 16px;
  }
`;
