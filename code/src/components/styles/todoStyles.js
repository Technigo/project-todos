import styled from "styled-components/macro"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from './sharedStyles'

export const TodoArticle = styled.article`
display: flex;
flex-direction: column;
max-width: 800px;
margin: 10px 20px;
padding: 10px;
border-radius: 5px;
background-color: #fff;
-webkit-box-shadow: 5px 10px 15px 0px rgba(0,0,0,0.3); 
box-shadow: 5px 10px 15px 0px rgba(0,0,0,0.3);
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
/* min-width: 60px; */
cursor: grabbing;
color: #3B7C7D;

`

export const TodoDragIcon = styled(FontAwesomeIcon)`
font-size: 1.25rem;
margin-right: 10px;
`

export const TodoCategoryIcon = styled.span`
font-size: 2rem;
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
font-size: 1.25rem;
margin-right: 10px;
color: #3B7C7D;

`

export const TodoText = styled.span`
display: flex;
align-self: center;
`

export const TodoDeleteButton = styled(Button)`
  font-size: 1.25rem;
  margin-left: 10px;
`

export const TodoTimestamp = styled.div`
font-size: 0.5rem;
text-align: right;
color: #3B7C7D;

`
