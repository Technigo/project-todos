import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { addTask } from 'reducers/tasks'
import { TodoItem } from './TodoItem'

const MainBackgroundDiv = styled.div`
    background-color: blue;
    padding: 30px;
    height: 100vh;
`
const Title = styled.h1`
    color: orange;
    text-align: center;
`
const InputDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`
const StatusSpan = styled.span`
    color: white;
    display: flex;
    justify-content: center;
`
const AddButton = styled.button`
    color: orange;
    font-weight: bold;
`

//ändra till export default längst ner, ta då bort {} vid import
export const Todo = () => {
    const [value, setValue] = useState('');
    const allTodos = useSelector((store) => store.tasks);
    console.log(allTodos.length)

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            console.log('write something first');
        } else {
            dispatch(
                addTask({
                    task: value
                })
            )
        }
        setValue('');
    }

  return (
    <MainBackgroundDiv>
      <Title>Reminders</Title>
        <TodoItem />
        <InputDiv>
            <input
                type="text"
                placeholder="New reminder"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <AddButton onClick={onSubmit}>
                Add task
            </AddButton>
        </InputDiv>
        <StatusSpan>You have {allTodos.length} todos in your list</StatusSpan>
    </MainBackgroundDiv>
  )
}
