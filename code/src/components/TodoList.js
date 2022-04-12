import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import updateBtn from '../assets/update.svg'
import deleteBtn from '../assets/delete.svg'

import TaskCounter from './TaskCounter'
import todo from '../reducers/todo'

const ListBtn = styled.button`
	padding: 0;
	border: none;
	position: relative;
	cursor: pointer;
	background: var(--clr--main);
	border-bottom: 1px solid var(--clr-accent);
	align-self: end;

	&:hover {
		transform: scale(1.2);
	}
`

const Container = styled.section`
	background: var(--clr-main-opacity);
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TaskContainer = styled.div`
	display: flex;
	width: 300px;
	padding: 0 1em;

	:first-of-type {
		padding-top: 1em;
	}

	:last-of-type {
		padding-bottom: 1.5em;
`

const InputText = styled.p`
	margin: 0;
	color: var(--clr-secondary);
	border-bottom: 1px solid var(--clr-accent);
	font-family: 'Imprima', 'Ubuntu', sans-serif;
	align-self: end;
	width: 250px;
`

const TodoList = () => {
	const items = useSelector((store) => store.todo.items)
	const dispatch = useDispatch()

	//dispatched reducers
	const onToggleTodo = (id) => {
		dispatch(todo.actions.toggleTodo(id))
	}

	const onUpdateTodo = (id) => {
		dispatch(todo.actions.updateTodo(id))
		console.log(id)
	}

	const onDeleteTodo = (id) => {
		dispatch(todo.actions.deleteTodo(id))
	}

	return (
		<>
			<Container>
				{items.map((item) => (
					<TaskContainer key={item.id}>
						<input
							type='checkbox'
							checked={item.isCompleted}
							onChange={() => onToggleTodo(item.id)}
						/>
						<InputText>{item.text}</InputText>
						<ListBtn onClick={() => onUpdateTodo(item.id)}>
							<img src={updateBtn} alt='update task'></img>
						</ListBtn>
						<ListBtn onClick={() => onDeleteTodo(item.id)}>
							<img src={deleteBtn} alt='delete task'></img>
						</ListBtn>
					</TaskContainer>
				))}
			</Container>
			<TaskCounter />
		</>
	)
}

export default TodoList
