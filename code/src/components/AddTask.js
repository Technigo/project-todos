import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import uniqid from 'uniqid'
import tasks from 'reducers/tasks'
import TaskList from 'components/TaskList'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const TodoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	background-color: rgb(255, 238, 238);
    min-width: 15rem;
    width: 20vw;
	margin: 0.5rem auto;
    padding: 2rem;
    border-radius: 15%;
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
	font-size: 1.5rem;
    padding: 2.5rem;
    color: rgb(255, 238, 238);
`;

const AddButton = styled.button`
    padding: 0.6rem;
    color: rgb(255, 238, 238);
    background-color: rgb(230, 9, 101);
    cursor: pointer;
    border-radius: 75%;
    font-weight: 700;
    margin-left: 0.5rem;
    
    &:hover {
    background-color: rgb(253, 93, 93);
    color: rgb(255, 238, 238);
    transition: background-color 0.4s ease;
    transition: font-size 0.4s ease;
    heigth: 30px;
    }
`;

const TextBox = styled.input`
    width: 9rem; 
    border: none;
    border-bottom: 2px solid rgb(253, 93, 93); 
    padding: 0.3rem;
    margin-bottom: 1.5rem; 
`

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
    <MainContainer> 
    <Title>
    Todo today  
    </Title>
    <TodoContainer>
            <form onSubmit={onFormSubmit}>
                <label>
                    <TextBox type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder='Write short task here...'
                        />
                </label>
                <AddButton type="submit" disabled={inputValue.length > 25}>Add</AddButton>
            </form>
        <TaskList/>
    </TodoContainer>
    </MainContainer>
    )
}

export default AddTask;
