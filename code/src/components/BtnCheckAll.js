import React from "react"
import { useDispatch, useSelector } from "react-redux"
import todos from '../reducers/todos'


const BtnCheckAll = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const checkAllTodos = (id) => {
        dispatch(todos.actions.checkAllTodos(id))
    }

    return (
        <button 
            className='check-all-btn' 
            onClick={() => checkAllTodos(items.id)}>
            Check all!
        </button>
    )
}

export default BtnCheckAll

    