import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { 
	ListSection, 
	TodoListDiv, 
	ButtonDone, 
	ButtonDelete, 
	ButtonContainer 
} from '../styled-components/ListStyle';

import todos from '../reducers/todos';

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

	return (
		<ListSection>
			<h2><i className="fas fa-list-alt"></i> Todo List</h2>
			{items.filter(item => item.isComplete === false).map((item) => (
				<TodoListDiv key={item.id} props={item.isComplete} >
					<span>{item.text}<span>{moment(item.createdAt).fromNow()}</span></span>
					<ButtonContainer>
						<ButtonDone onClick={() => onToggleTodo(item.id)}>
							<i className="fas fa-check"></i>
						</ButtonDone>
						<ButtonDelete  onClick={() => onDeleteTodo(item.id)}>
							<i className="fas fa-trash"></i>
						</ButtonDelete>
					</ButtonContainer>

				</TodoListDiv>
			))}
		</ListSection>
	)
};

export default TodoList;