import React from 'react'
import { useDispatch } from 'react-redux'

import { list } from 'reducers/list'

export const AddTodo = ({ todo }) => {
    const dispatch = useDispatch()
    return (
        <div> 
            <div> {todo.title} </div>
            <div>x{todo.quantity} </div>
        
            <button type="button" onClick={() => dispatch(list.actions.addTodo(todo))}>+</button>
            <button type="button" onClick={() => dispatch(list.actions.removeTodo(todo))}>-</button>
        </div>
        
    )
}