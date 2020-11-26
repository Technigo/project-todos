//ItemRemoved.js handles removal of todos/tasks

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {tasks} from 'reducers/tasks'
// import {NumberofTasks} from 'components/NumberofTasks'

export const ItemRemoved = () => {
	const dispatch = useDispatch()
	const clearTasks =  useSelector(store => store.tasks.list.tasks.length)

	const removeItems= () => {
		dispatch(
			tasks.actions.removeAllTasks()
		)
	}
return (
	<>
	<button type="button" onClick={removeItems} disabled={clearTasks===0}>
        remove all tasks
      </button>
	</>
)
}