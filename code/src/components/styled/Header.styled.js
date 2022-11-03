import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: gainsboro;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`