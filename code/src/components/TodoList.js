import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {todos} from 'reducers/todos'
import { CompleatedAllTodos } from './CompleatedAllTodos'

import {
    HeaderH1,
    CompleteContainer,
    Task,
    CurrentTask,
    DateP,
    TaskWrapper,
    TodoSection,
    DeleteBtn,
    FirstHalf,
    Checkboxes

  } from './Styling'

export const TodoList = () => {

    const items = useSelector((store) => store.todos.items)
    const completeItems = items.filter((listItem) => listItem.isComplete)
    const numberOfCompleteItems = completeItems.length


    const numberOfTodos = items.length

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return(
        <>
        <HeaderH1>Todo list</HeaderH1>
        
            <CompleteContainer>
                <h1>Tasks: {numberOfTodos - numberOfCompleteItems}</h1>
                <CompleatedAllTodos />
            </CompleteContainer>

            <TodoSection>
                <TaskWrapper>
                {items.map((item) => (
                        <Task key={item.id}>
                        <FirstHalf>
                                <Checkboxes
                                    className='checkbox'
                                    type='checkbox'
                                    checked={item.isComplete}
                                    onChange={() => onToggleTodo(item.id)}
                                />
                                <CurrentTask>
                                    <DateP className='date'>{item.date}</DateP>
                                    <p className={item.isComplete ? 'complete-todo' : 'uncomplete-todo'}>
                                    {item.text}
                                    </p>
                                </CurrentTask>
                            </FirstHalf>

                            <DeleteBtn onClick={() => onDeleteTodo(item.id)}>
                                Delete
                            </DeleteBtn>
                        
                        </Task>
                        ))}
                </TaskWrapper>
            </TodoSection>
        </>
    )
}