import React from "react"
import { useDispatch, useSelector } from "react-redux"
import todos from '../reducers/todos'


const BtnCheckAll = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const OnCheckAllTodos = () => {
        dispatch(todos.actions.checkAllTodos())
      }

    return (
        <button 
            className='check-all-btn' 
            onClick={OnCheckAllTodos}>
            Check all!
        </button>
    )
}

export default BtnCheckAll
