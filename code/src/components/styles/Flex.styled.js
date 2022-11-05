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
`

export const Innerwrapper = styled.div`
  margin: 0% 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.body};
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
  }

  img {
    mix-blend-mode: luminosity;
  }
`