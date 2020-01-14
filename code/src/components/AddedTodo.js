import React from 'react'
import { useDispatch } from 'react-redux'
import { total } from 'reducers/total'


export const AddedTodo = ({ todo }) => {
    // const dispatch = useDispatch()

    return (

        <article className="todo">

            <button
                type="button"
                disabled={todo.inventory === 0}
                onClick={() => (total.actions.addItem(todo))}>
                <span className="emoji" role="img" aria-label="butterfly">🦋</span>

            </button>
            <li className="todoName" role="text" aria-label={todo.title}>{todo.text}</li>
        </article>
    )
}