//ItemRemoved.js handles removal of todos/tasks

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {tasks} from 'reducers/tasks'

export const ItemRemoved = props => {
	const dispatch = useDispatch()
	const task =  useSelector((store) => store.tasks.list.tasks[taskIndex])

	const removeItem = (remove) => {
		dispatch(
			tasks.actions.checkTodoTask({
				taskIndex: taskIndex,
				complete: !task.complete
			})
		)
	}
return (
	<>
	<button type="button" onClick={() => removeItem(props.tasks.id)}>
        <span role="button" aria-label="remove">❌</span>
      </button>
	</>
)
}