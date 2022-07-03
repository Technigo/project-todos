import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import uniqid from 'uniqid'
import tasks from 'reducers/tasks'
import TaskList from 'components/TaskList'
import CompletedTasks from 'components/CompletedTasks'


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
                Todo today &nbsp; &nbsp; &nbsp;
                <CompletedTasks />
            </Title>
            <div>
                <form onSubmit={onFormSubmit}>
                    <label>
                        <TextBox type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            placeholder='Create new task'
                        />
                    </label>
                    <AddButton type="submit" disabled={inputValue.length < 1 || inputValue.length > 200}>
                        +
                    </AddButton>
                </form>
                <TaskList />
            </div>
        </MainContainer>
    )
}

export default AddTask;


const MainContainer = styled.main`
margin: 2rem;
@media (min-width: 768px) {
    margin: 3.5rem;
}

@media (min-width: 1024px) {
    margin: 5rem;
}
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    color: black;
`;

const TextBox = styled.input`
    width: 17rem; 
    border: none;    
    padding: 1rem;
    margin-bottom: 1.5rem; 
    margin-right: 2rem;
    background: #f5fbfd;
`;

const AddButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 23px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

&:hover,
:active {
  outline: 0;
}

&:hover {
  background-color: transparent;
  cursor: pointer;
}

:before {
  background-color: #D5EDF6;
  content: "";
  height: calc(100% + 3px);
  position: absolute;
  right: -7px;
  top: -9px;
  transition: background-color 300ms ease-in;
  width: 100%;
  z-index: -1;
}

&:hover:before {
  background-color: rgb(200, 285, 285);
}

:disabled {
    border: 1px solid #EAEAEA;
    background-color: transparent;
    color:  #DEDEDE;
}
`
