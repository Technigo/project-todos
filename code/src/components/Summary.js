import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import styled from 'styled-components'

const AllTasks = styled.div`
display:flex;
justify-content:center;
`

const RemoveAll = styled.div`
  display:flex;
  flex-direction:column;
`


export const Summary = ({ item }) => {
    const items = useSelector((store) => store.todos.items)
    const completedItems = items.filter((item) => item.completedTask)
    const dispatch = useDispatch()

    const [showSummary, setShowSummary] = useState(false)

    const handleRemoveAll = () => {
        dispatch(todos.actions.removeAll())
    }

    return (
        <AllTasks>
            <RemoveAll>
            <p>completed tasks: {completedItems.length}</p>
            
            <button type="button"
            onClick ={handleRemoveAll}>
                Delete All!
            </button>
            </RemoveAll>
        </AllTasks>
    )
}

