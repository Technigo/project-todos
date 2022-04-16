import React from 'react'
import styled from 'styled-components/macro'

const ToDoListItemArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 0.5px solid black;
    padding: 5px;
    background: white;
`

const ToDoListItem = ({ id, text, isComplete }) => {

    return (
        <ToDoListItemArticle>
            <h2>{text}</h2>
            <label>
                Is complete:
                <input
                    type="checkbox"
                    checked={isComplete} />
            </label>
            <button>Remove</button>
        </ToDoListItemArticle>
    )
}

export default ToDoListItem