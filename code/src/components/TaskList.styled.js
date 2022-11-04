import styled from 'styled-components';

export const Styled = {
  ListColumns: styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin-top: 5%;
    `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    margin: 1em;
    `,
  ListItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 0px;
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: whitesmoke;
    `,
  Clickers: styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   `
}
