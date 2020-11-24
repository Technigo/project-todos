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
 flex-direction:column;
 align-items: flex-end;
 margin:0px;
 @media (min-width: 700px){
  display:flex;
  justify-content:center;
  margin-top: 5px;
} 
`
export const TaskCount = styled.text`
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
    background-color:pink;
    transition-duration: 0.3s;
  }
`



