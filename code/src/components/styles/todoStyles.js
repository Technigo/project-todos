import styled from "styled-components/macro"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from './sharedStyles'


export const TodoArticle = styled.article`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
/* border: 2px solid red; */
border-radius: 5px;
background-color: #F3F7F7;
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

export const TodoDragBox = styled.span`
display: flex;
justify-content: flex-start;
align-items: center;
min-width: 60px;
cursor: grabbing;
`

export const TodoDragIcon = styled(FontAwesomeIcon)`
margin-right: 10px;
`

export const TodoCategoryIcon = styled.span`
font-size: 28px;
margin-right: 10px;
`

export const TodoToggleBox = styled.label`
display: flex;
align-items: center;
justify-content: flex-start;
flex-grow: 2;
cursor: pointer;
`

export const TodoToggleIcon = styled.span`
font-size: 20px;
margin-right: 10px;
`

export const TodoText = styled.span`
display: flex;
align-self: center;
`

export const TodoDeleteButton = styled(Button)`
  font-size: 1rem;
  margin-left: 10px;
`

export const TodoTimestamp = styled.div`
font-size: 8px;
text-align: right;
`
