import React from "react"
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
        <li>
            <label>
                <input type="checkbox"
                checked={complete}
                onChange={handleChecked}
                />
            </label>

            {text}

            <button type="button"
            onClick={handleDelete}>
                🗑
            </button>
        </li>
    )
}