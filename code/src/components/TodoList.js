import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'



import {todos} from 'reducers/todos'
import { CompleatedAllTodos } from './CompleatedAllTodos'

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
                            <input
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

const devices = {
    mobile: "(max-width: 667px)",
    tablet: "(min-width:668px) and (max-width:1024px)",
    desktop: "(min-width: 1025px)",
  };

const HeaderH1 = styled.h1`
    margin: 0;
    font-family: 'Staatliches', cursive;
    letter-spacing: 2px;
    font-size: 40px;
    color: rgb(255, 142, 77);
    text-shadow: 3px 3px 3px rgba(255, 124, 135, 0.5);
`

const CompleteContainer = styled.div`
    display: flex;
    gap: 20px;
`

const Task = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${devices.mobile} {
        transform: scale(0.8);
      }
    
`

const CurrentTask = styled.div`
    font-size: 20px;
    padding: -70px 0;
    z-index: 10;

`

const DateP = styled.p`
    font-size: 12px;
`

const TaskWrapper = styled.section`
    max-height: 400px;
    width: 400px;
`
const TodoSection = styled.section`
overflow: auto;
`

const DeleteBtn = styled.div`
position: relative;
float: right;
padding: 10px;
margin: 0 20px;
border-radius: 10px;
border: none;
box-shadow: -10px -10px 20px #fff, 10px 10px 20px rgb(174, 174, 192, 0.5);
cursor: pointer;

&:hover {
    box-shadow: 
0px 0px 2px #5f5f5f,
0px 0px 0px 5px #ecf0f3,
8px 8px 15px #a7aaaf,
-8px -8px 15px #ffffff;

box-shadow: inset 8px 8px 8px #cbced1,
          inset -8px -8px 8px #ffffff;
transition: ease-in 0.4s;
}
`

const FirstHalf = styled.div`
display: flex;
align-items: center;
gap: 10px;
`