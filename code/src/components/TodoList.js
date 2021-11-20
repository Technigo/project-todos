import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { todos } from "../reducers/todos";

const ListContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
	margin: 7px 0;
	border-radius: 5px;
	border: 1px solid #e0e0e0;
	min-height: 55px;
	padding: 10px;
`;

const Checkbox = styled.input`
	border-radius: 50%;
`;

const TaskName = styled.p`
	width: 100%;
	padding: 0 10px;
`;

const DeleteButton = styled.button`
	border: solid 1px grey;
	background-color: #ffffff;
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;

export const TodoList = () => {
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
			{items.map((item, index) => (
				<ListContainer key={item.id}>
					<Checkbox
						type="checkbox"
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)}
					/>
					<TaskName>{item.text}</TaskName>
					<DeleteButton
						aria-label="delete"
						onClick={() => onDeleteTodo(item.id)}
					>
						x
					</DeleteButton>
				</ListContainer>
			))}
		</section>
	);
};
