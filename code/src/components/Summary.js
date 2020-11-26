import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const SummaryText = styled.p`
    font-size: 16px;
    font-weight: 300;
    text-align: center;
`

export const Summary = () => {
    const items = useSelector((store) => store.todos.items)
    const completedTasks = items.filter((item) => item.complete)

    return (
        <div>
            <SummaryText>You have done {completedTasks.length} out of {items.length} tasks</SummaryText>
        </div>
    )
}