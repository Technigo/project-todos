import styled from "styled-components/macro"

export const StyledTodo = styled.div`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 15px 20px;
padding: 15px;
border: 2px solid red;
border-radius: 5px;
background: #fff;
`

export const StyledTodoItem = styled.div`
display: flex;
justify-content: space-between;
`

export const ItemIcons = styled.span`
display: flex;
`

export const StyledTodoDeadline = styled.div`
text-transform: uppercase;
font-size: 12px;
`

export const StyledTodoTimestamp = styled.div`
font-size: 8px;
text-align: right;
`

export const StyledCategoryIcon = styled.span`
font-size: 32px;
margin-right: 10px;
`

export const StyledToggleIcon = styled.span`
font-size: 24px;
margin-right: 10px;

`

// comment arranger pour que le text soit aligné à gauche??
export const ItemText = styled.span`
align-self: flex-start;
`