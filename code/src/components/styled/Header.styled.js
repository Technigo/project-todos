import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: var(--header-bg-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.5rem;

    & div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & div:nth-child(2) {
      align-items: flex-end;
    }
`