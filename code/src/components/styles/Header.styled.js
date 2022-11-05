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

  @media (min-width: 668px){
    margin-bottom: 30px;

    div {
      height: 40px;
    }
  
  }
  @media (min-width: 1025px){
    
  }
`

export const StyledH1 = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  color: #367857;
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 1.8rem;
  font-weight: 500;
`

export const ClearAllBtn = styled.button`
  border: none;
  background-color: #9FDFBF;
  border-radius: 20px;
  cursor: pointer;
  color: #367857;
  font-size: 0.8rem;
  height: 100%;
  padding: 6px 12px;
  margin-left: 5px;

  @media (min-width: 668px){
    padding: 0px 25px;

  }
  @media (min-width: 1025px){
    
  }
`

export const Counter = styled.p`
background-color: #377958;
border-radius: 20px;
color: white;
font-size: 14px;
padding: 2px 20px;
height: 100%;
display: flex;
align-items: center;

@media (min-width: 668px){
  padding: 20px 40px;

}
@media (min-width: 1025px){
  
}
`