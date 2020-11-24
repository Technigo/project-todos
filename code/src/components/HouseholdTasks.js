import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const HouseholdTasks = () => {
	const tasks = useSelector((store) => store.tasks)
	const houseTasks = tasks.filter((item) => item.category === "Household")

	console.log(houseTasks)

	return (
		<>
		<h2>Household list</h2>
		{houseTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}