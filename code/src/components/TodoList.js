import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
	ListSection, 
	TodoListDiv, 
	Button, 
	ButtonContainer,
	CategorySpan,
	TextSpan
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
					<TextSpan>{item.text}</TextSpan>
					<CategorySpan>{item.category}</CategorySpan>
					<ButtonContainer>
						<Button green onClick={() => onToggleTodo(item.id)}>
							<i className="fas fa-check"></i>
						</Button>
						<Button red onClick={() => onDeleteTodo(item.id)}>
							<i className="fas fa-trash"></i>
						</Button>
					</ButtonContainer>

				</TodoListDiv>
			))}
		</ListSection>
	)
};

export default TodoList;