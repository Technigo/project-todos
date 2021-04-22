import React from 'react';
import { useSelector } from 'react-redux';




const TotalCompleteItems = () => {
	const todos = useSelector((store) => store.todos.items);
	const completedTodos = todos.filter(singleTodo => singleTodo.isComplete)

	return (
	<h2>Completed: {completedTodos.length}</h2>
	)
	
};


export default TotalCompleteItems;