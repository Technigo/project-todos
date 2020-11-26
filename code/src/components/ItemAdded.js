//ItemAdded.js handles posting of todos/tasks

import React, {useState} from 'react'
import{useDispatch } from 'react-redux'

import {tasks} from 'reducers/tasks'

export const ItemAdded = ({itemId}) => {
const [newTask, setNewTask] = useState('')
const dispatch = useDispatch()


const handleSubmit = event => {
	event.preventDefault()
	dispatch(
		tasks.actions.taskAdded({
			itemId:itemId,
			taskInfo:{text: newTask, complete: false}
		})
	)
	setNewTask('')
}

return (
	<form className="addTask"  onSubmit={handleSubmit}>
		<div className="taskAdded">
			<textarea type="text" required
			value={newTask}
			placeholder="Do next . . ."
			onChange={(event)=>
			setNewTask(event.target.value)}/>

			<button type="submit" 
				disabled={newTask.length < 2}>
				add
			</button>
		</div>
	</form>
)
}
