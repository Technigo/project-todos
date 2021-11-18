import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

import styled from "styled-components";

//styled components
const TodoSection = styled.section`
word-wrap: break-word;
font-family: 'Comic Neue', cursive;
`;

const TodoItem = styled.div`
word-wrap: break-word;
font-family: 'Comic Neue', cursive;
`;

const TodoParagraph = styled.p`
	display:inline-block;
	width: 55%;
	font-size: 14px;
`;

const Checkbox = styled.input`
	width:20%;
`;

const DeleteToDo = styled.button`
	display:inline-block;

`;

//code
//taking items from the store - import to refer to slice which is todos in this case 
const TodoList = () => {
	const items = useSelector((store) => store.todos.items);

	const dispatch = useDispatch();

	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id));
	};

	const onDeleteTodoImmutability = (id) => {
		dispatch(todos.actions.deleteTodo(id));
	};

	return (
		<TodoSection>
			{items.map((item, index) => (
				<TodoItem key={item.id}>
					<Checkbox
						type="checkbox"
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)}
					/>

					<TodoParagraph>{item.text}</TodoParagraph>

					<DeleteToDo onClick={() => onDeleteTodoImmutability(item.id)}>
						Delete
					</DeleteToDo>
				</TodoItem>
			))}
		</TodoSection>
	);
};

export default TodoList;
