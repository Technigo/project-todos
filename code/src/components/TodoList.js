import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { todos } from "../reducers/todos";

const ListContainer = styled.section`
	margin-bottom: 110px;
`;

const FormContainer = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	background-color: #ffffff;
	margin: 7px 0;
	border-radius: 5px;
	border: 1px solid #e0e0e0;
	min-height: 60px;
	padding: 15px;
`;

const Checkbox = styled.input`
	border-radius: 50%;
	position: relative;
	top: 5px;
`;

const TaskName = styled.label`
	width: 100%;
	padding-left: 10px;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
`;

const Date = styled.span`
	font-size: 11px;
	color: #b0b0b0;
	line-height: 12px;
`;

const DeleteButton = styled.button`
	border: solid 1px grey;
	background-color: #ffffff;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	position: relative;
	top: 5px;
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
		<ListContainer>
			{items.map((item, index) => (
				<FormContainer key={item.id}>
					<Checkbox
						type="checkbox"
						name={item.id}
						id={item.id}
						value={item.text}
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)}
					/>
					<TaskName for={item.id}>
						{item.text}
						<Date> Date</Date>
					</TaskName>
					<DeleteButton
						aria-label="delete"
						onClick={() => onDeleteTodo(item.id)}
					>
						x
					</DeleteButton>
				</FormContainer>
			))}
		</ListContainer>
	);
};
