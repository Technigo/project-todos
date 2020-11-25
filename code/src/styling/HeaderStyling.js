import styled from 'styled-components'

export const Container = styled.div`
@media (min-width: 700px){
  display:flex;
  justify-content:center;
}
`

export const Background  = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#F4F4F4;
  padding:15px;

  @media (min-width: 700px){
    width:320px;
  }
  @media (min-width: 1024px){
    width:440px;
  }


`
export const Text = styled.h1`
  font-size:22px;
  margin:0px;


  @media (min-width: 700px){
    
} 
`
export const DateText = styled.p`
  font-size: 16px;

  @media (min-width: 700px){
    
    
} 
`
export const SectionTwo = styled.div`
 display:flex;
 flex-direction:column;
 align-items: flex-end;
 margin:0px;
 @media (min-width: 700px){
  display:flex;
  justify-content:center;
  margin-top: 5px;
} 
`
export const TaskCount = styled.p`
 text-decoration: underline;
 margin-bottom:6px;
`

export const SectionOne = styled.div`
  display:flex;
  flex-direction: column;
`
export const Button = styled.button`
  width: 80px;
  background-color:#ff9900;
  color:#fff;
  font-size:14px;
  padding: 2px 0px;
  border-radius: 8px;
  border:none;
  cursor: pointer;

  &:hover {
    background-color:black;
    transition-duration: 0.3s;
  }
`



