import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const Other = () => {
	const tasks = useSelector((store) => store.tasks)
	const otherTasks = tasks.filter((item) => item.category === "Other")

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