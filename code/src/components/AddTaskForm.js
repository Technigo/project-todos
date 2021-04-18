import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'
import { AddTodoForm, FormTextArea, SubmitButton } from './styled components/AddTaskFormStyling'

export const AddTaskForm = () => {
	const [value, setValue] = useState('');

    const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault();
		// console.log('user entered: ' + value);
        dispatch(
            tasks.actions.addTask({
                content: value
            })
        )
        setValue('') //to clear input after submit 
	};

	return (
		<AddTodoForm onSubmit={onSubmit}>
			<FormTextArea
				type='text'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></FormTextArea>

			<SubmitButton type='submit'>
				➕
			</SubmitButton>
		</AddTodoForm>
	);
};