import React, {useState} from 'react'
import{useDispatch } from 'react-redux'

import {tasks} from 'reducers/tasks'

export const Item = ({itemId}) => {
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

// const ItemContainer = styled.p`
// align-self: flex-start;
// padding:8px;
// margin:8px;
// font-size:32px;
// color:#F7AF9D;
// width: 50%;
// background-color:#F7E3AF; 
// `;