import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

//Style components
const TaskstoComplete = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	margin-top: 30px;
	max-height: 310px;
	padding: 0 10px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

const TasksWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
	width: 90%;
	align-items: center;
	border-radius: 20px;
	height: 50px;
`;

const TimeandTask = styled.div`
	display: inline-block;
	flex-direction: column;
	margin: 0;
	flex-grow: 1;
	padding: 0;
	font-weight: 660;
	font-family: 'Poiret One', cursive;
	color: white;
	font-size: 16px;
	line-height: 40%;
`;

const CheckboxWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

const Input = styled.input`
	cursor: pointer;
`;

const Deletebtn = styled.button`
	border: none;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	&:hover {
		background-color: red;
	}
`;

const Time = styled.p`
	font-size: 12px;
`;

// component showing the added tasks
const TodoList = () => {
	const items = useSelector((store) => store.todos.items); // reaching for the data in the Slice todo.js

	const dispatch = useDispatch(); //An instance of dispatch

	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id));
	};

	//v1
	// const onDeleteTodoMutability = (index) => {
	// 	dispatch(todos.actions.deleteTodo(index));
	// };

	//v2
	const onDeleteTodoImmutability = (id) => {
		dispatch(todos.actions.deleteTodo(id));
	};

	return (
		<TaskstoComplete>
			{items.map((item, index) => (
				<TasksWrapper key={item.id}>
					<CheckboxWrapper>
						<Input
							type="checkbox"
							placeholder="black"
							checked={item.isComplete}
							onChange={() => onToggleTodo(item.id)}
						/>
					</CheckboxWrapper>

					<TimeandTask>
						<p>{item.text}</p>
						<Time>{item.createdAt}</Time>
					</TimeandTask>
					<Deletebtn onClick={() => onDeleteTodoImmutability(item.id)}>
						<span role="img" aria-label="Delete trash-can">
							🗑️
						</span>
					</Deletebtn>
				</TasksWrapper>
			))}
		</TaskstoComplete>
	);
};

export default TodoList;
