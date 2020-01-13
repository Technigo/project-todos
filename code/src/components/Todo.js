import React from 'react'
import { useDispatch } from 'react-redux'
import { totalTodos } from 'reducers/totalTodos'

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    return (
        <article className="todo">
            <span className="todoName" role="text" aria-label={todo.title}>{todo.text}</span>
            <p>{todo.quantity}st</p>
            <button
                type="button"
                disabled={todo.inventory === 0}
                onClick={() => dispatch(totalTodos.actions.addItem(todo))}>
                Add to list
      </button>
        </article>
    )
}