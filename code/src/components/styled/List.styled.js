import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style-type: none;
    min-height: 500px;
    width: 100%;
  
    & li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid gainsboro;
      color: gray;
      font-size: 1.1rem;
      padding: 1rem 1.5rem 1rem .5rem;
    }
`