import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {todos} from 'reducer/todos'

const ItemContainer = styled.li`
    align-self: flex-end;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
    color: #3f3f3f;
    background-color: #b8f4ff;
`

export const Item = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <ItemContainer>{item.text}
            <button onClick={() => dispatch(todos.actions.removeOne(item.id))}>Remove One</button>
        </ItemContainer>
    )
}