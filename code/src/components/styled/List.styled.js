import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: flex;
  justify-content: center;

  & ul {
    padding-left: 0;
    list-style-type: none;
    min-height: 450px;
    width: 100%;
  }
    & li {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      border: 1px solid gainsboro;
    }
`