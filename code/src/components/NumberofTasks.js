import React from 'react'
import {useSelector} from 'react-redux'

export const NumberofTasks = ()=> {
	const tasks = useSelector(state=>state.tasks.list.tasks)
	const remainingTask = tasks.filter(task=>task.complete===false)

	if (remainingTask.length === 0){
		return (
			<div>
			<p className="xTasks">Good job, you are all done!</p>
			<p className="xTasks numb">Go enjoy your day.</p>
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