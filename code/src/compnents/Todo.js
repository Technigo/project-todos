import React from "react";
import { useDispatch } from "react-redux";
import { list } from 'reducers/list'

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    return (
        <div>
        <div> {todo.title} </div>

        <button onClick={() => dispatch(list.actions.addTodo(todo))}> Add Todo </button>
        </div>
    )
}