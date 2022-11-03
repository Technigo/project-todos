import styled from 'styled-components';

export const OuterWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: pink;
  padding-top: 1px;
`

export const InnerWrapper = styled.div`
  background-color: white;
  width: 80%;
  max-width: 700px;
  margin: 2rem auto 0;
`

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