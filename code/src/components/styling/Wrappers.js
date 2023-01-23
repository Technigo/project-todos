import styled from 'styled-components'

export const OuterWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 668px){
    justify-content: center;
  }
`
export const InnerWrapper = styled.div`
  width: 55%;
  height: 100vh;
  margin-top: 15px;
  background-color: transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 668px){
    margin-left: 0;
    margin-top: 48px;
  }
`
export const Section = styled.section`
  width: 100%;
  background-color: rgb(187, 186, 195);
  color: white;
  display: flex;
  flex-direction: column;
`
