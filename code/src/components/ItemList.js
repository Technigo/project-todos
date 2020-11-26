//ItemList.js stores all tasks/todos

import React from 'react'
import {useSelector} from 'react-redux'
import {ItemsAll} from 'components/ItemsAll'

export const ItemList = () => {
	const allTasks = useSelector((store) => store.tasks.list)
	const wholeList = useSelector((store) => store.tasks.list.tasks)

	if (wholeList.length === 0) {
		return (
			<>
			<h1 className="listEmpty"> no tasks</h1>
			{/* ADD AN IMG HERE? */}
			</>
		)
	}
	return (
		<section>
			{allTasks.tasks.map((task, index ) => (
				<ItemsAll task={task} taskIndex={index}/>
			))}
		</section>
	)
}