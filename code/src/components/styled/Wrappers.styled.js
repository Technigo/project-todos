import styled from 'styled-components';

export const OuterWrapper = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;
  min-width: 100vw;
`

export const InnerWrapper = styled.div`
  background-color: white;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`