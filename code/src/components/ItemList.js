//ItemList.js stores all tasks/todos
import React from 'react'
import {useSelector} from 'react-redux'
import {ItemsAll} from 'components/ItemsAll'

import './style/task-list.css'


export const ItemList = () => {
	const allTasks = useSelector((store) => store.tasks.list)
	const wholeList = useSelector((store) => store.tasks.list.tasks)

	if (wholeList.length === 0) {
		return (
			<>
			<h1 className="listEmpty"> You are clear of duties for now, good on you!</h1>
			<img className="tasksDone" alt="yay" 
          src='yay.png' />
			</>
		)
	}
	return (
		<section>
			{allTasks.tasks.map((task, index ) => (
				<ItemsAll key={task.id} task={task} taskIndex={index}/>	
			))}
		</section>
	)
}