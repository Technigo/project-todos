import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    margin-bottom: 10px;
    background: none;
`


export const ClearAll = () => {
    const dispatch = useDispatch()

    const handleClearAll = () => {
      /*   dispatch(todos.actions.clearAll) */
    }

    return (
       <div> 
           <Button onClick={handleClearAll}>[Clear All]</Button>
        </div>
    )
}