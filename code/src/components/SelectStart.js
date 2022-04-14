import React from 'react'
import { useSelector } from 'react-redux'

import TodoList from './TodoList'
import EmptyState from './EmptyState'

const SelectStart = () => {
	const items = useSelector((store) => store.todo.items)

	return (
		<>
			{items.length > 0 && <TodoList />}
			{items.length < 1 && <EmptyState />}
		</>
	)
}

export default SelectStart
