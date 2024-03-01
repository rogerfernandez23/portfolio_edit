import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  max-height: 18vh;
`;

export const ContainerItens = styled.div`
  width: 450px;

  .first {
    width: 25%;
    height: 30px;
    border-radius: 18px;
    border: none;
    background-color: #f39303;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-duration: 0.5s;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
      transform: scale(1.03);
    }

    &:active {
      opacity: 0.6;
    }
  }

  .second {
    width: 25%;
    height: 30px;
    margin-left: 30px;
    border-radius: 18px;
    border: none;
    background-color: #f39303;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-duration: 0.5s;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }

    &:active {
      opacity: 0.6;
    }
  }

  .third {
    width: 25%;
    height: 30px;
    margin-left: 30px;
    border-radius: 18px;
    border: none;
    background-color: #f39303;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition-duration: 0.5s;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }

    &:active {
      opacity: 0.6;
    }
  }
`;
