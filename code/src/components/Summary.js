import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import { Container } from '../shared/Container'

import styled from 'styled-components'


const RemoveAll = styled.div`
  display:flex;
  flex-direction:column;
`


export const Summary = () => {
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter((item) => item.completedTask)
    const dispatch = useDispatch()

    const handleRemoveAll = () => {
        dispatch(todos.actions.removeAll())
    }

    return (
        <Container>
            <RemoveAll>
                <p>completed tasks: {completedItems.length}</p>
                    <button type="button"
                      onClick ={handleRemoveAll}>
                      Delete All!
                    </button>
            </RemoveAll>
        </Container>
    )
}

