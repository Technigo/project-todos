import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const CodingTasks = () => {
	const tasksCoding = useSelector((store) => store.tasks)
	const codingTasksList = tasksCoding.items.filter((item) => item.category === "Coding")

	return (
		<>
		<h2>Coding</h2>
		{codingTasksList.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}