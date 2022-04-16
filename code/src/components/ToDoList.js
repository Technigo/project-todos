import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import ToDoListItem from './ToDoListItem'

const StyledListSection = styled.section`
    margin: 10px;
    background-color: salmon;
`

const ToDoList = () => {
    const toDoList = useSelector((store) => store.todos.toDoList)

    const completedToDos = toDoList.filter((todo) => todo.isComplete)

    const isListNotEmpty = toDoList.length > 0

    return (
        <>
            {isListNotEmpty &&
                <section style={{textAlign: 'center'}}>
                    <p>Completed: {completedToDos.length} of {toDoList.length}</p>
                </section>
            }
            <StyledListSection>
                {toDoList.map((toDoItem, itemIndex) => (
                    <ToDoListItem
                        key={toDoItem.id}
                        itemIndex={itemIndex}
                        id={toDoItem.id}
                        text={toDoItem.text}
                        isComplete={toDoItem.isComplete}>
                    </ToDoListItem>
                ))}
            </StyledListSection>
        </>
    )
}

export default ToDoList