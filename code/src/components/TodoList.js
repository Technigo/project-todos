import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos'

const TodoList = () => {
	//taking items from the store, import to refer to slice which is todos in this case 
	const items = useSelector((store) => store.todos.items);

	const dispatch = useDispatch();

	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id))
	};

	const onDeleteTodo = (id) => {
		dispatch(todos.actions.deleteTodo(id))
	};

	return(
		<section>
			{/*mapping thought items array to display in the page */}
			{items.map((item, index) => (
				<div className="flex-item" key={item.id}>
					<input 
						type="checkbox" 
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)} />
					<p>{item.text}</p>
					<button onClick={() => onDeleteTodo(item.id)}>Delete</button>
				</div>
			))}
		</section>
	)
};

export default TodoList;