import styled from 'styled-components/macro'

export const BackgroundDiv = styled.div`
  background-color: #5A7869;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const OuterWrapper = styled.section`
  background-color: #BAF8D9;
  margin: 0 auto;
  width: 80%;
  height: 90%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.desktop}){
    min-width: 820px;
    max-width: 50%;
  }
`

export const Innerwrapper = styled.div`
  margin: 0% 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    position: relative;
  }
`

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`