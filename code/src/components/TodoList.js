import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import todos from '../reducers/todos';

const TodoListContainer = styled.section`
	background-color: rgb(202, 202, 202);
	padding: 0 10px;
	margin-bottom: 20px;
`; 

const TodoListDiv = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 5px;
`;




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

	return(
		<TodoListContainer>
			<h2><i class="fas fa-list-alt"></i> Todo List</h2>
			{/*mapping thought items array to display in the page */}
			{items.filter(item => item.isComplete === false).map((item) => (
				<TodoListDiv key={item.id} className={`${item.isComplete ? "complete" : ""}`}>
					<input 
						key={item.id}
						type="checkbox" 
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)} />
					<p>{item.text}</p>
					<button onClick={() => onDeleteTodo(item.id)}>
						<i className="fas fa-trash"></i>
					</button>
				</TodoListDiv>

			))}
		</TodoListContainer>
	)
};

export default TodoList;