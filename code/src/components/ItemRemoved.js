//ItemRemoved.js handles removal of todos/tasks

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Swal from 'sweetalert2'
//reference: https://sweetalert2.github.io/

import {tasks} from 'reducers/tasks'
import {NumberofTasks} from 'components/NumberofTasks'

export const ItemRemoved = () => {
	const dispatch = useDispatch()
	const clearTasks =  useSelector(store => store.tasks.list.tasks.length)

	const removeItems= () => {
		Swal.fire({
			title: 'Do you want to remove all tasks?',
			text:'This action cannot be undone once all tasks are deleted',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
			confirmButtonText:'yes, remove all',
			confirmButtonAriaLabel: 'yes',
			cancelButtonText:'no, keep tasks',
			cancelButtonAriaLabel: 'no'
		  })
		.then((result) => {
			if(result.isConfirmed) {
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
		<span role='img' aria-label='bin'>🗑️</span>

      </button>
	  <NumberofTasks/>
	</>
)
}