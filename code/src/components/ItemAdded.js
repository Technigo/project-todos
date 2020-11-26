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

const emptyTask = (value) => value.replace(/\s/g, "").length === 0;

return (
	<form className="addTask"  onSubmit={handleSubmit}>
		<div className="taskAdded">
			<textarea type="text" required
			value={newTask}
			placeholder="Do next . . .✏️"
			onChange={(event)=>
			setNewTask(event.target.value)}/>

		{/* <label for="task-select">Choose a category:</label>
{/* 
		<select name="pets" id="pet-select">
			<option value="">categories</option>
			<option value="Self Care">Self Care</option>
			<option value="Household">Household</option>
			<option value="Coding">Coding</option>
			<option value="Groceries">Groceries</option>
			<option value="Other">Other</option>
		</select> */} 

			<button type="submit" 
				disabled={newTask.length < 5 || newTask.length >140 || emptyTask(newTask)}>
					<p>{newTask.length} / 140</p>
				add task
			</button>
		</div>
	</form>
)
}
