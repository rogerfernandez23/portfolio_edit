import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;

  .yellow {
    background-color: #f39303;
    height: 75vh;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  img {
    width: 90px;
  }
`;
