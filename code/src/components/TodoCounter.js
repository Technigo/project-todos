import React from 'react';
import { useSelector } from 'react-redux';

const TodoCounter = () => {
	const items = useSelector((store) => store.todos.items);
	const isChecked = items.filter((task) => task.isComplete);
	return <p className='text'> Total completed: {isChecked.length} </p>;
};

export default TodoCounter;
