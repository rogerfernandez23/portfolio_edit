import styled from 'styled-components';

import BackImg from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${BackImg});
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;

  .yellow {
    background-color: #f39303;
    height: 16vh;
    width: 100%;
  }

  .container-text {
    padding: 50px 80px;
  }

  h1 {
    font-size: 46px;
    font-weight: 800;
  }

  p {
    text-align: justify;
    margin-top: 40px;
    font-size: 20px;
    font-weight: 200;
  }
`;
