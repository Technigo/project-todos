import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const Groceries = () => {
	const tasksGroceries = useSelector((store) => store.tasks)
	const groceriesTasks = tasksGroceries.items.filter((item) => item.category === "Groceries")


	return (
		<>
		<h2>Groceries</h2>
		{groceriesTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}