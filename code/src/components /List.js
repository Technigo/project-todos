import { useDispatch } from 'react-redux';

const List = ({ itemIndex, id, text, isComplete }) => {
	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todo.value);

	const onDeleteToDo = (index) => {
		dispatch(todo.actions.deleteItem(index));
	};

	const onToggleToDo = (id) => {
		dispatch(todo.actions.toggleToDo(id));
	};

	return (
		<>
			<div>
				<input
					type="checkbox"
					checked={isComplete}
					onChange={() => onToggleToDo(id)}
				/>
				{text}
			</div>
			<div>
				<button onClick={() => onDeleteToDo(itemIndex)}>Delete</button>
			</div>
		</>
	);
};

export default List;
