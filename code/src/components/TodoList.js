import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AmountOfTodos } from "./AmoutOfTodos";

import todos from "../reducers/todos";

const Todos = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const TodoText = styled.p`
	display: flex;
	align-items: flex-start;
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
				<Todos className="flex-item" key={item.id}>
					<TodoText>{item.text}</TodoText>
					<input
						type="checkbox"
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)}
					/>

					<button onClick={() => onDeleteTodo(item.id)}>Delete task</button>
				</Todos>
			))}
		</section>
	);
};

export default TodoList;
