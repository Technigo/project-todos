import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`

const Title = styled.h1`
margin: 0;
font-size: 20px;
padding-bottom: 5px;
`

const DateText = styled.p`
  font-size: 16px;
  margin: 0;
`



export const Header = () => {
    const totalTasks = useSelector((store) => store.todos.list.items)
    const totalUndone = totalTasks.filter((task) => !task.done)
    // const [displayedTasks, setDisplayedTasks] = useState(totalTasks.length)
    const date = new Date(Date.now())
    const options = { month: 'long', day: 'numeric' }

    const wordCount = () => {
        if (totalTasks.length === 1) {
            return "task"
        } else {
            return "tasks"
        }
    }

    return (
        <HeaderContainer>
            <div>
                <Title>ToDo</Title>
                <DateText>{date.toLocaleDateString('en-US', options)}</DateText>
            </div>
            <div>
                <p>{totalTasks.length} {wordCount()}</p>
                {/* <select onChange={(event) => setDisplayedTasks(event.target.value)}>
                    <option value={''}></option>
                    <option value={totalTasks.length}>Show total</option>
                    <option value={totalUndone.length}>Show UnDone</option>
                </select> */}
            </div>
        </HeaderContainer>
    )
}