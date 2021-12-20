import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AmountOfTodos } from "./AmoutOfTodos";

import todos from "../reducers/todos";

const Todos = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TodoText = styled.p`
	display: flex;
	align-items: flex-start;
`;

const DeleteButton = styled.button`
	font-family: "Saira Condensed", sans-serif;
	background-color: #e6ceff;
	border-radius: 5px;
	margin: 5px;
	border: 2px;
	box-shadow: 1px 1px 3px #4d2c91;
`;

const Checkbox = styled.input`
	font-family: "Saira Condensed", sans-serif;
	background-color: #e6ceff;
	color: #e6ceff;
	border: none;
	outline: none;
`;

const TodoList = () => {
	const items = useSelector((store) => store.todos.items);

	const dispatch = useDispatch();

	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id));
	};

	const onDeleteTodo = (id) => {
		dispatch(todos.actions.deleteTodo(id));
	};

	return (
		<section>
			<AmountOfTodos />
			{items.map((item) => (
				<Todos key={item.id}>
					<Checkbox
						type="checkbox"
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)}
					/>
					<TodoText>{item.text}</TodoText>

					<DeleteButton onClick={() => onDeleteTodo(item.id)}>
						Delete to-do
					</DeleteButton>
				</Todos>
			))}
		</section>
	);
};

export default TodoList;
