import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const Other = () => {
	const tasksOther = useSelector((store) => store.tasks)
	const otherTasks = tasksOther.items.filter((item) => item.category === "Other")

	console.log(otherTasks)

	return (
		<>
		<h2>Other</h2>
		{otherTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}