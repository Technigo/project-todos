import styled from 'styled-components';

export const Styled = {
  ListColumns: styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid blue;
    width: 90%;
    margin-top: 5%;
    `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid green;
    text-align: center;
    `,
  ListItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
    `,
  Clickers: styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   `
}
