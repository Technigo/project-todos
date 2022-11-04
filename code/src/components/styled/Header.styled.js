import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: var(--main-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.5rem 1.5rem 1.5rem 1.4rem;

  & h1 {
    color: white;
    font-size: 2rem;
    line-height: 30px;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & p {
      margin-left: .1rem;
      font-size: 1rem;
      }
  }

  & div:nth-child(2) {
    align-items: flex-end;
    color: white;

    & p {
      margin-right: .1rem;
      }
  }

  & button {
    background: var(--button-color);
    margin-top: .5rem;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    padding: .5rem;
    width: 6rem;
    height: 2.3rem;
  }
`