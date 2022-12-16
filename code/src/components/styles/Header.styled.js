import styled from 'styled-components/macro'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  div {
    display: flex;
    width: 100%;
    font-size: 0.8rem;
    align-items: center;
    height: 30px;
    justify-content: center;
  }

  p {
    font-size: 0.8rem;
  }

  @media (min-width: ${({ theme }) => theme.tablet}){
    margin-bottom: 40px;

    div {
      height: 40px;
    }
  
  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`

export const StyledH1 = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 500;
  line-height: 2.8rem;
`

export const Counter = styled.p`
    background-color: #ffffff;
    border-radius: 20px;
    color: #2e708c;
font-size: 14px;
padding: 2px 20px;
height: 100%;
display: flex;
align-items: center;

@media (min-width: ${({ theme }) => theme.tablet}){
  padding: 20px 40px;

}
@media (min-width: ${({ theme }) => theme.desktop}){
  
}
`