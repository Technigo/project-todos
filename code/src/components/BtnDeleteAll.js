import React from "react"
import { useDispatch, useSelector } from "react-redux"
import todos from '../reducers/todos'

const BtnDeleteAll = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const deleteAllTodos = (id) => {
        dispatch(todos.actions.deleteAllTodos(id))
    }

    return (
    <button 
        className='delete-all-btn' 
        onClick={() => deleteAllTodos(items.id)}>
        Delete all!
    </button>
    )

}

export default BtnDeleteAll
    