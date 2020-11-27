import React from 'react'
import {useSelector} from 'react-redux'

import './style/task-content.css'

export const NumberofTasks = ()=> {
	const tasks = useSelector(state=>state.tasks.list.tasks)
	const remainingTask = tasks.filter(task=>task.complete===false)

	if (remainingTask.length === 0){
		return (
			<div>
			<p className="xTasks">Go enjoy your day, or create a new task!</p>
			</div>
		)
	}

	return (
		<div>
			<p className={tasks.length === 0 ? "noTasks" : "xTasks"}>
				{remainingTask.length} / {tasks.length} tasks left to complete
			</p>
			<p className={tasks.length === remainingTask.length ? "xTasks numb" : "noTasks"}>
				You can do this!
			</p>
		</div>
		
	)
}