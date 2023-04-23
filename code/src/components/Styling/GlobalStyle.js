import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
body {
    margin: 0;
    padding: 0;
}
`;

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-color);
    width: 90vw;
    max-width: 600px;
    height: 100%;
    border-radius: 25px;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;
`;

export const HeaderH1 = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 10px 0;
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
  margin-top: 1px;
  cursor: pointer;
  &:hover {
    color: var(--hover-color);
  }  
`;

export const CounterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
    height: 10px;
    padding: 2px 20px;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 700;
    color: var(--text-color);  
`;

export const CounterP = styled.p`
  font-size: 11px;
  font-weight: 300;
  margin: 0;
  padding-left: 10px;
`;

export const TaskBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--box-color);
    width: 70vw;
    max-width: 300px;
    height: 100%;
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
`;

export const TaskParagraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  width: 50vw;
  margin: 0;
  overflow-wrap: break-word;
  @media (min-width: 500px) {
  width: 230px;
  }
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  i {
    font-size: 18px;
    color: var(--main-color);
    padding: 0;
    &:hover {
      color: var(--hover-color);
    }
  }
`;

export const DeleteBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--box-color);
    max-width: 122px;
    height: 18px;
    padding: 10px 10px;
    margin: 10px auto;
    border-radius: 10px;
`;

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--main-color);
  font-size: 13px;
  font-weight: 700;
  &:hover {
    color: var(--hover-color);
   }
`;

export const Foot = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 160px;
  margin-top: 20px;

  i {
    font-size: 20px;
    color: var(--text-color);
    padding: 0 9px;
    &:hover {
      color: var(--hover-color);
    }
  }
`;

export const FootParagraph = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  padding-top: 10px;
  text-align: center;
`;

export default GlobalStyles;