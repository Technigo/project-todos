import { useDispatch, useSelector } from 'react-redux';

const List = () => {
	const todo = useSelector((state) => state.todo.value);
};
