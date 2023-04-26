import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #f6f6f6;
    font-family: 'Baloo 2', cursive;
    font-size: 18px;
    display: flex;
    justify-content: center;
    }
`;

export const StyledHeader = styled.img`
  width: 90vw;
  margin: 15px;

  @media (min-width: 668px) {
    width: 75vw;
  }
`;

export const Wrapper = styled.div`
  background-color: #fff;
  width: 80vw;
  text-align: center;
  padding: 10px;
  margin: 20px auto;
  margin-bottom: 40px;
  border-radius: 25px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  @media (min-width: 668px) {
    width: 55vw;
  }
`;

export const SingleTodo = styled.div`
  margin: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  line-height: 1em;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 4px 13px;
  margin: 8px;
  font-family: 'Baloo 2', cursive;
  background: #edca7f;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  :hover {
    opacity: 70%;
  }
`;
