import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import uniqid from 'uniqid'
import tasks from 'reducers/tasks'
import TaskList from 'components/TaskList'

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	background-color: rgb(255, 238, 238);
    max-width: 15rem;
    min-width: 15rem;
	margin: 0.5rem auto;
    padding: 2rem;
    border-radius: 15%
`;

const Title = styled.h1`
	font-size: 1.5rem;
    padding: 2.5rem;
    color: rgb(255, 238, 238);
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
        <> <Title>
        Todo today : 
    </Title>
    <Container>
            <form onSubmit={onFormSubmit}>
                <label>
                    New task : &nbsp;
                    <input type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        />
                </label>
                <button type="submit">Add</button>
            </form>
        <TaskList/>
    </Container>
    </>
    )
}

export default AddTask;
