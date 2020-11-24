import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const Groceries = () => {
	const tasks = useSelector((store) => store.tasks)
	const groceriesTasks = tasks.filter((item) => item.category === "Grocery list")

	console.log(groceriesTasks)

	return (
		<>
		<h2>Grocery list</h2>
		{groceriesTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}