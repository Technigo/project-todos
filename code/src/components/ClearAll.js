import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from 'reducers/todos'

const Button = styled.button`
    border: none;
    margin-bottom: 10px;
    background: none;
    font-weight: 300;
    cursor: grab;
    outline: none;
`

export const ClearAll = () => {
    const dispatch = useDispatch()

    return ( 
           <Button onClick={() => { dispatch(todos.actions.clearAll())}}>[Clear All]</Button>
    )
}