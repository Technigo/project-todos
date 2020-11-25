import styled from 'styled-components'

export const TodoContainer = styled.li`
  display:flex;
  flex-direction:row; 
  justify-content: space-between;
  padding:20px;
  margin:5px;
  font-size: 18px;
  background-color:#F4F4F4;
  border-radius: 10px 0px;
  width:80%;
  border-bottom-style: solid;

  @media (min-width: 700px) and (max-width: 1024px) {
    width: 40%
  }

  @media (min-width:1025px) {
    width:30%
  }
`

export const TodoText = styled.p `
  font-size: 16px;
`

export const ListActionButton = styled.button `
   align-self: center; 
   padding: 4px;
   margin: 2px; 
   font-size: 22px; 
`