import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { formatRelative, subDays } from 'date-fns'
import styled from 'styled-components'

import updateBtn from '../assets/update.svg'
import deleteBtn from '../assets/delete.svg'

import AddTodo from './AddTodo'
import TaskCounter from './TaskCounter'
import todo from '../reducers/todo'

const ListBtn = styled.button`
	padding: 0.1em 0.1em 0;
	border: none;
	position: relative;
	cursor: pointer;
	background: var(--clr--main);
	border-bottom: 1px solid var(--clr-accent);
	align-self: end;

	&:hover {
		background: var(--clr-accent);
		border-radius: 20%;
		transition: all 0.3s ease-in;
	}
`

const DeleteAllbtn = styled.button`
	font-family: inherit;
	background: var(--clr-gray);
	color: var(--clr-secondary);
	border: none;
	padding: 0.4em 1em;
	position: relative;
	top: 5px;
	left: 126px;

	&:hover {
		text-decoration: line-through;
		transform: scale(0.9);
		transition: all 0.3s ease-in;
	}
`

const Container = styled.section`
	background: var(--clr-main-opacity);
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TaskContainerWrapper = styled.form`
	display: flex;
`

const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	padding: 0.5em 1em 0;

	:first-of-type {
		padding-top: 1em;
	}

	:last-of-type {
		padding-bottom: 1.5em;
`

const DateContainer = styled.p`
	margin: 0.25em 1.65em;
	font-size: 12px;
	color: var(--clr-gray);
`

const InputText = styled.label`
	margin: 0;
	padding-bottom: 0.2em;
	color: var(--clr-secondary);
	border-bottom: 1px solid var(--clr-accent);
	font-family: 'Imprima', 'Ubuntu', sans-serif;
	align-self: end;
	width: 230px;
	overflow-wrap: break-word;
`

const TodoList = () => {
	const [inputChange, setInputChange] = useState('')
	const items = useSelector((store) => store.todo.items)
	console.log('items', items)
	console.log('inputchange', inputChange)
	const dispatch = useDispatch()

	//dispatched reducers
	const onToggleTodo = (id) => {
		dispatch(todo.actions.toggleTodo(id))
	}

	const onUpdateTodo = (id, editable) => {
		dispatch(todo.actions.updateTodo(id, editable))
		console.log(id)
	}

	const onDeleteTodo = (id) => {
		dispatch(todo.actions.deleteTodo(id))
	}

	const onDeleteAll = () => {
		dispatch(todo.actions.deleteAll())
	}

	const onInputChange = (e, editable) => {
		if (editable) {
			setInputChange(e.target.value)
		}
	}

	const dateString = formatRelative(subDays(new Date(), 0), new Date(), {
		addSuffix: true,
	})
	// ('LLLL d, yyyy | HH:mm')

	return (
		<main>
			<AddTodo />

			<Container>
				{items.map((item) => (
					<TaskContainer key={item.id}>
						<TaskContainerWrapper>
							<input
								type='checkbox'
								name='tasks'
								checked={item.isCompleted}
								onChange={() => onToggleTodo(item.id)}
							/>
							<InputText
								onChange={(e) => onInputChange(e, item.editable)}
								className={`${item.isCompleted ? 'completed' : ''}`}
							>
								{item.text}
							</InputText>
							<ListBtn onClick={() => onUpdateTodo(item.id)}>
								<img src={updateBtn} alt='update task'></img>
							</ListBtn>
							<ListBtn onClick={() => onDeleteTodo(item.id)}>
								<img src={deleteBtn} alt='delete task'></img>
							</ListBtn>
						</TaskContainerWrapper>
						<div>
							<DateContainer>{dateString}</DateContainer>
						</div>
					</TaskContainer>
				))}
			</Container>
			<TaskCounter />
			<DeleteAllbtn onClick={onDeleteAll}>delete all</DeleteAllbtn>
		</main>
	)
}

export default TodoList
