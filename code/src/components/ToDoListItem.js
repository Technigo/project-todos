import React from 'react'
import styled from 'styled-components/macro'

const ToDoListItemArticle = styled.article`
    display: flex;
    align-items: center;
`

const ToDoListItem = ({ id, text, isComplete }) => {

    return (
        <ToDoListItemArticle>
            <input 
                type="checkbox"
                checked={isComplete} />
            <h2>{text}</h2>
            <button>Remove</button>
        </ToDoListItemArticle>
    )
}

export default ToDoListItem