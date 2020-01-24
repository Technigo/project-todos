import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'

const StyledButton = styled.button`
background: #e9b2bc;
border-radius: 10px;
border: 1px solid #d1d1e0;
text-transform: uppercase;
&:hover {
  background: #5d2242;
  color:white;
  cursor: pointer;
}
height: 3em;
`;


export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <StyledButton type='button' onClick={() => dispatch(todos.actions.removeAll())}>
            Remove All
    </StyledButton>
    )
}
