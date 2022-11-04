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
      }
  }

  & div:nth-child(2) {
    align-items: flex-end;
    color: white;

    & p {
      margin-right: .1rem;
      }
  }
`