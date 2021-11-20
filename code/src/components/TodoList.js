import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const TaskstoComplete = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	margin-top: 30px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
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

const Checkboxwrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

// const Recyclebin = styled.img`
// 	width: 20px;
// 	height: 20px;
// 	border-radius: 50%;
// `;

const Deletebtn = styled.button`
	border: none;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	&:hover {
		background-color: #b2ea70;
	}
`;

const Time = styled.p`
	font-size: 12px;
`;

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
					<Checkboxwrapper>
						<input
							type="checkbox"
							placeholder="black"
							checked={item.isComplete}
							onChange={() => onToggleTodo(item.id)}
						/>
					</Checkboxwrapper>

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
