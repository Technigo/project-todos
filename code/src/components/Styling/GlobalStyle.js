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
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: var(--hover-color);
  }  
`;

export const TaskBox = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--box-color);
    width: 70vw;
    max-width: 300px;
    height: 100%;
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
`

export const TrashBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  i {
    font-size: 20px;
    color: var(--main-color);
    padding: 0 18px 0 18px;
    &:hover {
      color: var(--hover-color);
    }
  }
`

export const Foot = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
  margin-top: 20px;

  i {
    font-size: 20px;
    color: var(--text-color);
    padding: 0 18px 0 18px;
    &:hover {
      color: var(--hover-color);
    }
  }
`

export const FootParagraph = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  padding-top: 10px;
  text-align: center;
`;

export default GlobalStyles;