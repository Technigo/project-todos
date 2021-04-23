import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import TextField from '@material-ui/core/TextField'

import { tasks } from '../reducers/tasks'
import { AddTodoForm, SubmitButton } from './styled components/AddTaskFormStyling'

export const AddTaskForm = () => {
	const [value, setValue] = useState('')
    const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault()
		const newTask = {
            id: uniqid(),
            content: value,
            completed: false
        };
        dispatch(tasks.actions.addTask(newTask))
        setValue('')
	}

	return (
		<AddTodoForm onSubmit={onSubmit}>
			 <TextField 
			 	id="outlined-basic" 
				required
				label="Add todo..." 
				variant="outlined"
				fullWidth
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<SubmitButton type='submit'>
				<span role="img" aria-label="add button">
					➕
				</span>
			</SubmitButton>
		</AddTodoForm>
	)
}
