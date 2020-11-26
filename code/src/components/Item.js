import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { todos } from 'reducers/todos'

const ItemContainer = styled.li`
    align-self: flex-start;
    padding: 8px;
    margin: 8px;
    font-size: 20px;
    font-weight: 300;
`
const Input = styled.input`
    width: 20px; 
    height: 20px;
    margin-right: 30px;
`
const ListActionButton = styled.button`
    align-self: center;
    padding: 4px;
    margin: 2px; 
    margin-left: 10px;
    font-size: 11px;
    color: grey;
    border: none;
`
const Line = styled.hr`
    border: 0,5px solid rgba(71, 71, 71, 0.514);
    max-width: 350px;
`

export const Item = ({ item }) => {
    const dispatch = useDispatch()

    const handleRemoveItem = () => {
        dispatch(todos.actions.removeOne(item.id))
    }

    const handleCheckbox = () => {
        dispatch(todos.actions.toggleComplete(item.id))
    }
    
    
    return (
        <ItemContainer>
            <Input 
                type= 'checkbox'  
                name= 'checkbox' 
                value= 'check'
                onChange={handleCheckbox}>
            </Input>
                {item.text}
            <ListActionButton 
                onClick={handleRemoveItem}>[Remove]
            </ListActionButton>
            <Line></Line>
        </ItemContainer>
    )
}
