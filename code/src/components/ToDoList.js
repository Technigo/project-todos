import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import ToDoListItem from './ToDoListItem'
// import todos from 'reducers/todos'

const StyledListSection = styled.section`
    margin: 10px;
    background-color: salmon;
`

const ToDoList = () => {
    const toDoList = useSelector((store) => store.todos)

    return (
        <StyledListSection>
            {toDoList.map((toDoItem) => (
                <ToDoListItem 
                  key={toDoItem.id}
                  id={toDoItem.id}
                  text={toDoItem.text}
                  isComplete={toDoItem.complete}>
                </ToDoListItem>
            ))}
        </StyledListSection>
    )
}

export default ToDoList