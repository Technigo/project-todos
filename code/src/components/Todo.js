import React from "react";
import { useDispatch } from "react-redux";
import { list } from 'reducers/list'


//The dummy todos
export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <div> {todo.title} </div>
            <button onClick={() => dispatch(list.actions.addDummyTodo(todo))}> Add Todo </button>
        </div>
    )
}

