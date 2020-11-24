import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#F4F4F4;
  padding:20px;
`
export const Text = styled.text`
  font-size:22px;
  margin-bottom:5px;

  @media (min-width: 700px){
    display:flex;
    justify-content:center;
} 
`
export const DateText = styled.text`
  font-size: 16px;

  @media (min-width: 700px){
    display:flex;
    justify-content:center;
} 
`
export const Section = styled.div`
 display:flex;
 justify-content: flex-end;
 margin:0px;
`
export const TaskCount = styled.text`
 text-decoration: underline;
`



