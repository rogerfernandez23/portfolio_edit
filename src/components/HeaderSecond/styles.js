import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .black {
    background-color: black;
    height: 70vh;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  img {
    width: 100px;
  }
`;
