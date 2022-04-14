import React from 'react'
import { todos } from 'reducers/todos'
import { useSelector, useDispatch } from 'react-redux'

import { CheckAllBtn } from './Styling'


export const CompleatedAllTodos = () => {

    const items = useSelector((store) => store.todos.items)
    const dispatch = useDispatch()

    const onCompleteAll = (items) => {
        dispatch(todos.actions.CompleatedAllTodos(items))
    }

    return(
        <CheckAllBtn onClick={() => onCompleteAll(items)}>
            Check all
        </CheckAllBtn>
    )
}



