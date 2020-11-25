import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'

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
				<button type="submit">add</button>
			</label>
		</form>
	)

}