import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'

export const TasksInput = () => {
	const tasks = useSelector((store) => store.tasks)
	const [todoTask, setTodoTask] = useState('')

	const dispatch = useDispatch()
	const setTodoTaskId = tasks.length+1 

	console.log(setTodoTaskId)

	return (
		<form>
			<label>
				Add task
				<input type="text"
				onChange={event => setTodoTask(event.target.value)}
				value={todoTask}
				>
				</input>
				<button type="submit">add</button>
			</label>
		</form>
	)

}