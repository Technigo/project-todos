import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import Emoji from './Emoji'
import ToDoListItem from './ToDoListItem'

import todos from 'reducers/todos'

const StyledListSection = styled.section`
    margin: 20px 5px;
    p {
        text-align: center;
    }
`

const SummarySection = styled.section`
    text-align: center;
    margin-bottom: 10px;
`

const DeleteAllButton = styled.button`
    background-color: #FF8C00;
    border: none;
    border-radius: 12px;
    color: white;
    padding: 0.2rem 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: 'Overpass', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin: 4px 2px;
    cursor: pointer;        
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
            <StyledListSection>
                {!isListNotEmpty &&
                    <p>
                        Add a new task or just relax
                        &nbsp;
                        <Emoji
                            symbol="🍀"
                            label="four-leaf-clover" />
                    </p>
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

            {isListNotEmpty &&
                <SummarySection>
                    <p>Completed tasks: {completedToDos.length} of {toDoList.length}</p>
                    <DeleteAllButton onClick={() => onRemoveAll()}>
                        Delete all
                    </DeleteAllButton>
                </SummarySection>
            }
        </>
    )
}

export default ToDoList