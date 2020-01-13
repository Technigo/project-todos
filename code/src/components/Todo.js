import React from 'react'
import { useDispatch } from 'react-redux'
import { total } from 'reducers/total'

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    return (
        <article className="todo">

            <button
                type="button"
                disabled={todo.inventory === 0}
                onClick={() => dispatch(total.actions.addItem(todo))}>
                <span className="emoji" role="img" aria-label="butterfly">🦋</span>

            </button>
            <span className="todoName" role="text" aria-label={todo.title}>{todo.text}</span>
        </article>
    )
}