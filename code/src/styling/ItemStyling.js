import styled from 'styled-components'

export const TodoContainer = styled.li`
  display:flex;
  flex-direction:row; 
  justify-content: space-between;
  padding:10px;
  margin:10px;
  font-size: 18px;
  background-color:green;
  border-radius: 3px;
  width:80%;

  @media (min-width: 700px) and (max-width: 1024px) {
    width: 40%
  }

  @media (min-width:1025px) {
    width:30%
  }
`

export const TodoText = styled.text `
  font-size: 18px;
`

export const ListActionButton = styled.button `
   align-self: center; 
   padding: 4px;
   margin: 2px; 
   font-size: 22px; 
`