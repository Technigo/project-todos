import styled from 'styled-components/macro'

export const OuterWrapper = styled.section`
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  width: 100%;
  display: flex;
  justify-content: center;
  border: 2px solid white;
  flex-direction: column;

`

export const Innerwrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    position: relative;
  }

  @media (min-width: ${({ theme }) => theme.desktop}){
    max-width: 600px;
  }
`

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`