import React from 'react'
import { todos } from 'reducers/todos'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'


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

const CheckAllBtn = styled.button`
    border-radius: 50px;
    height: 40px;
    width: 80px;
    border: none;
    align-self: center;
    cursor: pointer;

    &:hover {
        box-shadow: 6px 6px 20px rgba(122,122,122,0.512);  
    }
`
