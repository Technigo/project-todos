import styled from "styled-components/macro"

export const TodoArticle = styled.article`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
border: 2px solid red;
border-radius: 5px;
background: #fff;
`

export const TodoDeadline = styled.div`
text-transform: uppercase;
font-size: 12px;
`

export const TodoMiddleBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 0;
`

export const TodoDraggingBox = styled.span`
display: flex;
justify-content: flex-start;
align-items: center;
min-width: 60px;
/* column-gap: 5px; */
cursor: grabbing;
`

// comment arranger pour que le text soit aligné à gauche??
export const TodoText = styled.span`
display: flex;
align-self: center;
/* flex-grow: 2; */
`

export const TodoTimestamp = styled.div`
font-size: 8px;
text-align: right;
`

export const TodoCheckingBox = styled.label`
display: flex;
align-items: center;
justify-content: flex-start;
flex-grow: 2;
cursor: pointer;
`


