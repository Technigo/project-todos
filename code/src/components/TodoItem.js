import React from "react"
import styled from 'styled-components'
import { useDispatch } from "react-redux"

import { todos } from '../reducers/todos'

export const TodoItem = ({ id, text, complete }) => {

    const dispatch = useDispatch()

    const handleChecked = () => {
        dispatch(todos.actions.toggleComplete(id))
    }

    const handleDelete = () => {
        dispatch(todos.actions.removeTodo(id))
    }

    return (
        <TodoContainer>
        <List>
            <label>
                <input type="checkbox"
                checked={complete}
                onChange={handleChecked}
                />
            </label>

            {text}

            <DeleteButton type="button"
            onClick={handleDelete}>
                <RemoveText>Delete</RemoveText>
            </DeleteButton>
        </List>
        </TodoContainer>
    )
}

const RemoveText = styled.text`
    font-size: 10px;
    color: #fff;
    background-color:  rgb(192, 171, 171);
    border-radius: 10%;
    padding: 2px;
    
`

const List = styled.li`
    list-style-type: none;
`

const TodoContainer = styled.div`
    padding: 5px;
`

const DeleteButton = styled.button`
    background-color: rgb(228, 220, 220);
    border: none;  
`