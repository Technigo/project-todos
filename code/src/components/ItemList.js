//ItemList.js stores all tasks/todos

import React from 'react'
import {useSelector} from 'react-redux'
import {ItemAdded} from 'components/ItemAdded'

export const ItemList = () => {
	const allTasks = useSelector((store) => store.tasks.tasks)

	return (
		<div>
			{allTasks.map((task) => (
				<ItemAdded key={task.id} task={task}/>
			))}
		</div>
	)
}