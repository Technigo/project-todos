import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const CodingTasks = () => {
	const tasks = useSelector((store) => store.tasks)
	const codingTasksList = tasks.filter((item) => item.category === "Coding")

	console.log(codingTasksList)

	return (
		<>
		<h2>Coding</h2>
		{codingTasksList.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}