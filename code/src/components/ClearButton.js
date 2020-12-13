import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import styled from 'styled-components'

const ButtonContainer = styled.div`
 display: flex;
 justify-content: center;
 margin: 10px;
`;

const ClearAllButton = styled.button`
 display: flex;
 justify-content: center;
 background: #D3CEFB;
 padding: 5px;
 border-radius: 5px;
 border: none;
 cursor: pointer;
 margin-top: 20px;
 text-align: center;
 width: 80%;
`;

export const ClearButton = () => {
    //Get correct item from store based on index
    const dispatch = useDispatch()

    const clearAllTodos = event => {
        dispatch(todos.actions.clearAll())
    }
    
    return (
        <ButtonContainer>
            <ClearAllButton onClick={clearAllTodos}>Clear All <span role="img" aria-label="paper bin">🗑</span></ClearAllButton>
        </ButtonContainer>
    )
}