/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  gap: 20px;
  margin-left: 5px;

  img {
    width: 30px;
    cursor: pointer;
  }

  .js {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-5px);
    }
  }

  .react {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-5px);
    }
  }

  .node {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-5px);
    }
  }

  .docker {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-5px);
    }
  }

  .postgres {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-5px);
    }
  }

  .mongodb {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-5px);
    }
  }
`;
