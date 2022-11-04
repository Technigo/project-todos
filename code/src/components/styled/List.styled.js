import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style-type: none;
    min-height: 35rem;
    width: 100%;

    & li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid gainsboro;
      color: gray;
      font-size: 1.1rem;
      padding: 1.2rem 1.5rem 1.2rem .5rem;
    }

    & button {
      background: none;
      border: none;
      color: var(--header-bg-color);
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 0;
      width: 6rem;
    }
`