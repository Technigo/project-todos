import styled from 'styled-components';

export const Styled = {
  Container: styled.div`
  width: 100%;
  `,
  Date: styled.p`
  font-style: italic;
  margin: 0.5em 0em 0em 1em;
  `,
  Heading: styled.h1`
  text-align: center;
  border-radius: 1em;
  padding: 0.5em;
  background: whitesmoke;
  border: 0.5px solid grey;
  margin: 0% 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 1000px) {
    transform: scale(0.65);
    margin: 0% 20%;
  }
  `
}