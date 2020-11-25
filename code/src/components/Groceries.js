import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const Groceries = () => {
	const tasks = useSelector((store) => store.tasks)
	const groceriesTasks = tasks.filter((item) => item.category === "Groceries")

	console.log(tasks.length)

	return (
		<>
		<h2>Groceries</h2>
		{groceriesTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}