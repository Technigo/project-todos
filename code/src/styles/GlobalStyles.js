import styled from 'styled-components'
import Background from '../images/Background3.png'

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InnerWrapper = styled.section`
  width: 80%;
  padding-top: 7vh;
  padding-bottom: 7vh;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 50%;
  }
`

export const ContentWrapper = styled.main`
  background-image: url(${Background});
  background-size: 100%;
`

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`