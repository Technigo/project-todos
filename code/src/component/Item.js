import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {todos} from 'reducer/todos'

const ItemContainer = styled.li`
    width: 100%
    align-self: flex-end;
    padding: 20px;
    margin: 8px;
    font-size: 20px;
    color: #3f3f3f;
    background-color: #E1C9FD;
    border-radius: 45px;
    list-style-type:none;

    ::first-letter {
        text-transform: uppercase;
    }

    
`



export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const taskCompleted  = useSelector(store => store.todos.items.isComplete)
    console.log(taskCompleted)
    
    

    return (
        <ItemContainer>{item.text}
            <button onClick={() => dispatch(todos.actions.removeOne(item.id))}>Remove One</button>
        </ItemContainer>
    )
}