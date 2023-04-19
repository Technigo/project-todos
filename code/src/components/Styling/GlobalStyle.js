import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
body {
    margin: 0;
    padding: 0;
}
`

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-color);
    width: 90vw;
    height: 100%;
    border-radius: 25px;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 667px) {
      
}
`
export const HeaderH1 = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 20px 0;
  padding-top: 30px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  padding-top: 10px;
`;

export const AddBtn = styled.button`
  background-color: var(--box-color);
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: var( --text-color);
  border-radius: 5px;
  margin-left: 4px;
  margin-top: 10px;
  padding: 3px 10px;
  cursor: pointer;
  &:hover {
    color: var(--hover-color);
  }  
`;

export const TaskBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: var(--box-color);
    width: 230px;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
  `
export default GlobalStyles;