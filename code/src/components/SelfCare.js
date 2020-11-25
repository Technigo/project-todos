import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const SelfCare = () => {
	const tasks = useSelector((store) => store.tasks)
	const selfCareTasks = tasks.filter((item) => item.category === "Self Care")

	console.log(selfCareTasks)

	return (
		<>
		<h2>Self Care</h2>
		{selfCareTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}