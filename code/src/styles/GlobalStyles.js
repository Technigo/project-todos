import styled from 'styled-components'
import Background from '../images/Background.png'

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const InnerWrapper = styled.section`
  width: 80%;
  padding-top: 7vh;
  padding-bottom: 7vh;
  display: flex; 
  flex-direction: column;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`

export const ContentWrapper = styled.main`
  background-image: url(${Background});
  background-size: cover;
`