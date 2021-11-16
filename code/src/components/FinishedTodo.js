import React from 'react';
import { useSelector } from 'react-redux';

const FinishedTodo = () => {
	const items = useSelector((store) => store.todos.items);
	
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodo = items.filter((item) => item.isComplete);
	console.log(finishedTodo)

	return (
		<div className="finished-todo-container">
			<p>Fineshed todo goes here;</p>
			{finishedTodo.map(item => (
				<p>{item.text}</p>
			))}
		</div>
	)
};

export default FinishedTodo; 