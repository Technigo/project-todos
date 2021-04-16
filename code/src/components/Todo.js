import React from 'react'
import { useDispatch } from 'react-redux'


export const Todo =({ todo }) => {
    const dispatch = useDispatch()

    return (
        <article className="todo">
              <p>{todo.text}</p>
            <input>
            </input>
        </article>

    )
}