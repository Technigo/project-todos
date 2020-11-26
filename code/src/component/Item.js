import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {todos} from 'reducer/todos'

const ItemContainer = styled.li`

    width: 100%;
    height: 18px;
    display: flex;
    align-items: center;
    padding: 26px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #3f3f3f;
    background-color: #E1C9FD;
    border-radius: 45px;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;

    ::first-letter {
        text-transform: uppercase;
    } // Funkar inte på flex
    
`

const RemoveButton = styled.button`
    background-color: Transparent;
    border: none;  
    color: #fff;
    font-size: 50px;
`



export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const taskCompleted  = useSelector(store => store.todos.items.isComplete)
    console.log(taskCompleted)
    
    

    return (
        <ItemContainer>{item.text}
            <RemoveButton onClick={() => dispatch(todos.actions.removeOne(item.id))}>-</RemoveButton>
        </ItemContainer>
    )
}