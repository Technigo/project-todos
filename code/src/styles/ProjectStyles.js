import styled from 'styled-components/macro';

/* WRAPPERS */
export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
`
export const InnerWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin-top: 5vh;
  @media (min-width: 1024px) {
    width: 60%
  }
`