import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const TaskstoComplete = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const TasksWrapper = styled.div`
	display: flex;
	margin: 5px;
	width: 90%;
	align-items: center;
	border-radius: 20px;
`;

const TimeandTask = styled.div`
	display: inline-block;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	padding: 0;
	font-weight: 660;
	font-family: 'Poiret One', cursive;
	color: white;
`;

const Checkbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

const Recyclebin = styled.img`
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;

const Deletebtn = styled.button`
	border: none;
	width: 30px;
	height: 30px;
	border-radius: 50%;
`;

const Inputbox = styled.input`
	border-radius: 50%;
	::checkbox {
		border-radius: 50%;
	}
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
					<Checkbox>
						<Inputbox
							type="checkbox"
							placeholder="black"
							checked={item.isComplete}
							onChange={() => onToggleTodo(item.id)}
						/>
					</Checkbox>

					<TimeandTask>
						<p>{item.text}</p>
						<p>{item.createdAt}</p>
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

{
	/* <span role="img" aria-label="Delete trash-can">
							🗑️
						</span> */
}
