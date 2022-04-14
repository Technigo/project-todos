import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import uniqid from 'uniqid'
import tasks from 'reducers/tasks'
import TaskList from 'components/TaskList'

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	width: 90%;
	max-width: 40rem;
	margin: 5rem auto;
`;

const AddTask = () => {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault()

     const newTask = {
        id: uniqid(),
        name: inputValue,
        isDone: false,
     }

        dispatch(tasks.actions.addItem(newTask))

        setInputValue("")
    }

    return (
    <Container>
        <form onSubmit={onFormSubmit}>
           <label>
               New task : &nbsp;
           <input type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
           </label>
           <button type="submit">Submit</button>
        </form>
        <TaskList/>
        </Container>
    )
}

export default AddTask;
