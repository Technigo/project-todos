import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e4d9bd;
`;

export const Container = styled.div`
  width: 600px;
  height: 750px;
  background-color: #f7f5f1;
  padding: 20px;
  box-shadow: rgb(3 3 3 / 20%) 0px 8px 24px;

  @media (max-width: 667px) {
    width: 300px;
  }
`;
