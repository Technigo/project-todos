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
    color: black;
    box-shadow: -10px -10px 20px #fff, 10px 10px 20px rgb(174, 174, 192, 0.5);

    &:hover {
        box-shadow: 
    0px 0px 2px #5f5f5f,
    0px 0px 0px 5px #ecf0f3,
    8px 8px 15px #a7aaaf,
    -8px -8px 15px #ffffff;

  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
    transition: ease-in 0.4s;
    }
`
