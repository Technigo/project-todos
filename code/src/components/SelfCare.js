import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const SelfCare = () => {
	const tasksSelfCare = useSelector((store) => store.tasks)
	const selfCareTasks = tasksSelfCare.items.filter((item) => item.category === "Self Care")

	return (
		<>
		<h2>Self Care</h2>
		{selfCareTasks.map((item) => (
			<Item key={item.id} item={item}/>
		))}
		</>
	)
}