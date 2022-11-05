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
  padding-bottom: 8vh;
  display: flex; 
  flex-direction: column;
  @media (min-width: 668px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`
export const PaigeWrapper = styled.main`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

