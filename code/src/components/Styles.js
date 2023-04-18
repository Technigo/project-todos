import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  background: rgb(255,250,250, 0.5);
  height: 100vw;
`

export const TodoContainer = styled.section`
  height: fit-content;
  width: 330px;
  background: rgb(240,220,255,0.1);
  margin: 25px;
  padding: 20px;
  border: 1px solid #FFAB76;
  border-radius: 10px;
  @media (min-width: 667px) {
    width: 500px
  }
  @media (min-width: 1024px) {
    width: 800px
  }
`