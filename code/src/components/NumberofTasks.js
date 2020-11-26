import React from 'react'
import {useSelector} from 'react-redux'

export const NumberofTasks = ()=> {
	const tasks = useSelector(state=>state.tasks.list.tasks)
	const remainingTask = tasks.filter(task=>task.complete===false)

	if (NumberofTasks.length===0){
		return (
			<p>Good job, you are all done!</p>
		)
	}
}