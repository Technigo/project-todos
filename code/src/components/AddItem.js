import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

export const AddItem = () => {
	const [newItem, setNewItem] = useState('');
	const dispatch = useDispatch();
	const handleAddItem = () => {
		dispatch(todos.actions.addItem(newItem));
	};
	return (
		<div>
			<input
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button onClick={() => handleAddItem()}>Add to my list</button>
		</div>
	);
};
