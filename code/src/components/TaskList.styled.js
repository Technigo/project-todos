import styled from 'styled-components';

export const Styled = {
  ListColumns: styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin-top: 5%;

    @media only screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    margin: 1em;
    `,
  Heading: styled.h2`
    border-radius: 1em;
    padding: 0.5em;
    background: whitesmoke;
    border: 0.5px solid grey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media only screen and (max-width: 1000px) {
      transform: scale(0.8);
      }
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

   & input {
    margin: 1.2em;
    transform: scale(1.5);

    &:hover {
      cursor: pointer;
      }
   }

   & button {
    margin: 1em;
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
      transform: scale(2);
      }
   }
   `,
  ListText: styled.p`
    margin: 0.8em;
    font-weight: bold;
    text-align: left;
   `
}
