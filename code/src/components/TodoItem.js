import React from "react"
import styled from 'styled-components'
import { useDispatch } from "react-redux"

import { todos } from '../reducers/todos'

export const TodoItem = ({ id, text, complete }) => {

    const dispatch = useDispatch()

    const handleChecked = () => {
        dispatch(todos.actions.toggleComplete(id))
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

        </List>
        </TodoContainer>
    )
}

const List = styled.li`
    list-style-type: none;
`

const TodoContainer = styled.div`
    padding: 5px;
`
