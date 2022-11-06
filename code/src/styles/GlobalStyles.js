import styled from 'styled-components'
import Background from '../images/bgflowers2.jpg'

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;

`

export const InnerWrapper = styled.section`
  width: 90%;
  padding-bottom: 10vh;
  display: flex; 
  flex-direction: column;
  @media (min-width: 668px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 50%;
    padding-bottom: 15vh;
  }
  @media (min-width: 1600px) {
    width: 45%;
  }
`
export const PaigeWrapper = styled.main`
  background-image: url(${Background});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`

