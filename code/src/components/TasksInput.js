import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'
import styled from 'styled-components'

export const TasksInput = () => {
	const [todoTask, setTodoTask] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()
		if(todoTask.length>0) {
			dispatch(tasks.actions.addTask(todoTask))
			setTodoTask("")
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Add task
				<input type="text"
				value={todoTask}
				onChange={(event) => setTodoTask(event.target.value)}
				placeholder="Add a todo..."
				>
				</input>
				<Button type="submit">add</Button>
			</label>
		</form>
	)

}
const Button = styled.button`
border: 1px solid white;
padding:8px;
margin:8px;
font-size:15px;
color:#F7AF9D;
cursor:pointer;
background-color:#B0D0D3; 
`;