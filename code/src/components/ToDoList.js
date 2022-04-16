import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import ToDoListItem from './ToDoListItem'

import todos from 'reducers/todos'

const StyledListSection = styled.section`
    margin: 10px;
    padding: 10px;
    border: 1px solid salmon;
`

const ToDoList = () => {
    const toDoList = useSelector((store) => store.todos.toDoList)

    const dispatch = useDispatch()

    const completedToDos = toDoList.filter((todo) => todo.isComplete)

    const isListNotEmpty = toDoList.length > 0

    const onRemoveAll = () => {
        dispatch(todos.actions.removeAll())
    }

    return (
        <>
            {isListNotEmpty &&
                <section style={{ textAlign: 'center' }}>
                    <p>Completed: {completedToDos.length} of {toDoList.length}</p>
                    <button onClick={() => onRemoveAll()}>
                        Delete all
                    </button>
                </section>
            }
            <StyledListSection>
                {!isListNotEmpty &&
                    <p>Your list is empty</p>
                }
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