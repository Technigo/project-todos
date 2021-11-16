import React from 'react';
import { useSelector } from 'react-redux';

const TodoSummary = () => {
	const items = useSelector((store) => store.todos.items);
	
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodo = items.filter((item) => item.isComplete).length;
	console.log(finishedTodo)

	return (
		<div>
			Todo summary: {finishedTodo} of {items.length} done!
		</div>
	)
};

export default TodoSummary; 