//ItemRemoved.js handles removal of todos/tasks

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import swal from 'sweetalert'
//reference: https://sweetalert2.github.io/

import {tasks} from 'reducers/tasks'
import {NumberofTasks} from 'components/NumberofTasks'

export const ItemRemoved = () => {
	const dispatch = useDispatch()
	const clearTasks =  useSelector(store => store.tasks.list.tasks.length)

	const removeItems= () => {
		swal({
			title: 'Do you want to remove all tasks?',
			text:'This action cannot be undone once all tasks are deleted',
			buttons:'yes, remove all',
			dangerMode: true,
		})
		.then((deleteAll) => {
			if(deleteAll) {
				dispatch(
					tasks.actions.removeAllTasks()
				)}
		})
	}
return (
	<>
	<button type="button" 
		className="removeAll"
		onClick={removeItems}
		disabled={clearTasks === 0}>
        remove all tasks
      </button>
	  <NumberofTasks/>
	</>
)
}