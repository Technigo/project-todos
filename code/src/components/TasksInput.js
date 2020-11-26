import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'
import styled from 'styled-components'

export const TasksInput = () => {
	const [todoTask, setTodoTask] = useState('')
	const [category, setCategory] = useState('')
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
				<label>
				Category:
				<SelectOption value={category} onChange={(event) => setCategory(event.target.value)} required>
				<option value="">Select a category...</option>
				<option value="Self Care">Self Care</option>
				<option value="Household">Household</option>
				<option value="Coding">Coding</option>
				<option value="Groceries">Groceries</option>
				<option value="Other">Other</option>
				</SelectOption>
				</label>
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
export const SelectOption = styled.select`
  background:#F3EEC3;
  height: 30px;
  border: 2px solid #B0D0D3;
  border-radius: 3px;
  font-size: 18px;
  display: inline-flex;
`;