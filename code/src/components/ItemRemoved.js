//ItemRemoved.js handles removal of todos/tasks

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Swal from 'sweetalert2'
//reference: https://sweetalert2.github.io/

import styled from 'styled-components'

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
			confirmButtonColor: '#93dece', 
			confirmButtonAriaLabel: 'yes',
			cancelButtonText:'no, keep tasks',
			cancelButtonColor:'#e18ea0',
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
	<Button type="button" 
		className="removeAll"
		onClick={removeItems}
		disabled={clearTasks === 0}>
        <h5>remove all tasks
		<span role='img' aria-label='bin'>🗑️</span></h5>
      </Button>
	  <NumberofTasks/>
	</>
)
}
export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 5px;
  margin: 10px;
  width: 200px;
  background: #b39adb;
  color: black;
  text-align:center;
  border: 2px solid white;
  text-transform: uppercase;
  &:hover {
	background-color: #93dece;
	border: 1px solid #93dece;
	transition: ease-in-out 0.3s;
  }
  &:disabled {
	background: #dbdad6;
	color:#b3b0a8;
	border:none;
	cursor:arrow;
};
`;