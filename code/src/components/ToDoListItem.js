import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import todos from 'reducers/todos'

const ToDoListItemArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 0.5px solid black;
    padding: 5px;
    margin: 5px;
    background: white;
`

const ToDoListItem = ({ itemIndex, id, text, isComplete }) => {

    const dispatch = useDispatch()

    const onDeleteToDo = (index) => {
        dispatch(todos.actions.deleteItem(index))
    }

    const onToggleComplete = (id) => {
        dispatch(todos.actions.toggleComplete(id))
    }

    return (
        <ToDoListItemArticle>
            <h2>{text}</h2>
            <label>
                Is complete:
                <input
                    type="checkbox"
                    checked={isComplete}
                    onChange={() => onToggleComplete(id)} />
            </label>
            <button onClick={() => onDeleteToDo(itemIndex)}>Delete</button>
        </ToDoListItemArticle>
    )
}

export default ToDoListItem