import React from 'react'
import {useSelector} from 'react-redux'

export const NumberofTasks = ()=> {
	const tasks = useSelector(state=>state.tasks.list.tasks)
	const remainingTask = tasks.filter(task=>task.complete===false)

	if (NumberofTasks.length===0){
		return (
			<div>
			<p className="xTasks">Good job, you are all done!</p>
			<p className="xTasks numb">Go chill instead</p>
			</div>
		)
	}

	return (
		<div>
			<p className={tasks.length === 0 ? "noTasks" : "xTasks"}>
				{remainingTask.length} of {tasks.length} to complete
			</p>
			<p className={tasks.length === remainingTask.length ? "xTasks numb" : "noTasks"}>
				Why don't we do something?
			</p>
		</div>
		
	)
}