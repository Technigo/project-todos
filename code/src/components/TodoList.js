import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

import updateBtn from '../assets/update.svg'
import deleteBtn from '../assets/delete.svg'
import plusBtn from '../assets/plus.svg'

import AddTodo from './AddTodo'
import TaskCounter from './TaskCounter'
import CompleteAll from './CompleteAll'
import todo from '../reducers/todo'

const ListBtn = styled.button`
	padding: 0.1em 0.1em 0;
	border: none;
	position: relative;
	cursor: pointer;
	background: var(--clr--main);
	align-self: end;

	@media (min-width: 667px) {
		border-bottom: 1px solid var(--clr-accent);

		&:hover {
			background: var(--clr-accent);
			border-radius: 20%;
			transition: all 0.3s ease-in;
		}
	}
`
const AddBtn = styled.button`
	background: transparent;
	padding: 0;
	border: none;
	position: absolute;
	top: 6px;
	right: 6px;
	cursor: pointer;
`
const AddPlus = styled.img`
	color: none;
	position: absolute;
	right: 43px;
	bottom: -13px;

	&:hover {
		transform: scale(1.2);
		transition: all 0.3s ease-in;
	}
`

const ButtonWrapper = styled.div`
	align-self: flex-start;
	margin-left: 1.05em;

	@media (min-width: 667px) {
		margin-left: 5.7em;
	}
`

const DeleteAllbtn = styled.button`
	font-family: inherit;
	background: var(--clr-gray);
	color: var(--clr-secondary);
	border: none;
	padding: 0.4em 1em;
	margin-left: 0.5em;
	margin-top: 0.5em;

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
	position: relative;
`
const Wrapper = styled.div`
	display: flex;
	position: relative;
`
const TaskContainerWrapper = styled.div`
	display: flex;
	position: relative;
`
const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 282px;
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
	width: 225px;
	overflow-wrap: break-word;
`

const TodoList = () => {
	const [inputChange, setInputChange] = useState('')
	const items = useSelector((store) => store.todo.items)
	// const text = items.filter((item) => item)
	console.log('items', items)
	console.log('inputChange', inputChange)

	const dispatch = useDispatch()

	//dispatched reducers
	const onToggleTodo = (id) => {
		dispatch(todo.actions.toggleTodo(id))
	}

	const onUpdateTodo = (id) => {
		dispatch(todo.actions.updateTodo({ id: id, text: inputChange }))
		// dispatch(todo.actions.updateTodo(id))
		setInputChange('')
	}

	const onToggleEditable = (id) => {
		dispatch(todo.actions.toggleEditable(id))
	}

	const onDeleteTodo = (id) => {
		dispatch(todo.actions.deleteTodo(id))
	}

	const onDeleteAll = () => {
		// window.confirm('are you sure?') ? console.log('yes') : null
		dispatch(todo.actions.deleteAll())
	}

	return (
		<main>
			<AddTodo />
			<Container>
				<TaskCounter />
				{items.map((item) => (
					<TaskContainer key={item.id}>
						<TaskContainerWrapper>
							<Wrapper>
								<input
									tabIndex={'0'}
									type='checkbox'
									name='tasks'
									checked={item.isCompleted}
									onChange={() => onToggleTodo(item.id)}
								/>
								<InputText className={`${item.isCompleted ? 'completed' : ''}`}>{item.text}</InputText>
							</Wrapper>
							<ListBtn onClick={() => onToggleEditable(item.id)}>
								<img src={updateBtn} alt='update task'></img>
							</ListBtn>
							{item.editable && (
								<input
									class='new-content'
									value={inputChange}
									type='text'
									onChange={(e) => setInputChange(e.target.value)}
								/>
							)}
							{item.editable && (
								<AddBtn
									type='submit'
									onClick={() => onUpdateTodo(item.id)}
									disabled={inputChange.length === 0}
								>
									<AddPlus src={plusBtn} alt='add task'></AddPlus>
								</AddBtn>
							)}
							<ListBtn onClick={() => onDeleteTodo(item.id)}>
								<img src={deleteBtn} alt='delete task'></img>
							</ListBtn>
						</TaskContainerWrapper>
						<div>
							<DateContainer>{item.createdAt}</DateContainer>
						</div>
					</TaskContainer>
				))}
			</Container>
			{items.length > 0 && (
				<ButtonWrapper>
					<CompleteAll />
					<DeleteAllbtn onClick={onDeleteAll}>delete all</DeleteAllbtn>
				</ButtonWrapper>
			)}
		</main>
	)
}

export default TodoList
