//ItemRemoved.js handles removal of todos/tasks

import React from 'react'
import {useDispatch} from 'react-redux'

import {tasks} from 'reducers/tasks'

export const ItemRemoved = props => {
	const dispatch = useDispatch()

	const removeItem = id => {
		dispatch(tasks.actions.removeOne(id))
	}
return (
	<>
	<button type="button" onClick={() => removeItem(props.tasks.id)}>
        <span role="img" aria-label="remove">❌</span>
      </button>
	</>
)
}