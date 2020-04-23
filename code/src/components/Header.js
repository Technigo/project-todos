import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
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

const TaskText = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize}
`

const ClearButton = styled.button`
  color: white;
  border-radius: 5px;
  background-color: #6979f8;
  margin-top: 5px;
`


export const Header = () => {
    const dispatch = useDispatch()
    const folders = useSelector((store) => store.todos.list.categories)
    let result = 0
    const unDoneTasks = []
    folders.forEach((folder) => {
        result += folder.items.length
        folder.items.forEach((item) => {
            if (!item.done) {
                unDoneTasks.push(item)
            }
        })
    })

    const date = new Date(Date.now())
    const options = { month: 'long', day: 'numeric' }

    const wordCount = () => {
        if (result === 1) {
            return "task"
        } else {
            return "tasks"
        }
    }

    const clearAll = () => {
        dispatch(
            todos.actions.clearAll()
        )
    }

    return (
        <HeaderContainer>
            <div>
                <Title>ToDo</Title>
                <DateText>{date.toLocaleDateString('en-US', options)}</DateText>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TaskText fontSize="16px">{result} {wordCount()}</TaskText>
                <TaskText fontSize="12px">[{unDoneTasks.length} uncompleted]</TaskText>
                <ClearButton onClick={() => clearAll()}>CLEAR ALL</ClearButton>
            </div>
        </HeaderContainer>
    )
}