import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

import updateBtn from '../assets/update.svg'
import deleteBtn from '../assets/delete.svg'
import plusBtn from '../assets/plus.svg'
import closeBtn from '../assets/close.svg'

import AddTodo from './AddTodo'
import TaskCounter from './TaskCounter'
import CompleteAll from './CompleteAll'
import todo from '../reducers/todo'

const TodoList = () => {
	const [inputChange, setInputChange] = useState('')
	const items = useSelector((store) => store.todo.items)

	const dispatch = useDispatch()

	//_____dispatch reducers______//
	const onToggleTodo = (id) => {
		dispatch(todo.actions.toggleTodo(id))
	}

	const onUpdateTodo = (id) => {
		dispatch(todo.actions.updateTodo({ id: id, text: inputChange }))
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
		<Main>
			<Section>
				{' '}
				<AddTodo />
				<Container>
					<TaskCounter />
					{items.map((item) => (
						<TaskContainer key={item.id}>
							<TaskContainerWrapper>
								<Wrapper>
									<input
										role='checkbox'
										tabindex='0'
										type='checkbox'
										name='tasks'
										checked={item.isCompleted}
										onChange={() => onToggleTodo(item.id)}
									/>
									<InputText className={`${item.isCompleted ? 'completed' : ''}`}>{item.text}</InputText>
								</Wrapper>
								<ListBtn onClick={() => onToggleEditable(item.id)}>
									{!item.editable ? (
										<img src={updateBtn} alt='update task'></img>
									) : (
										<img className='close' src={closeBtn} alt='update task'></img>
									)}
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
										<AddPlus src={plusBtn} alt='add task'>
											add
										</AddPlus>
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
			</Section>
		</Main>
	)
}

export default TodoList

//________ Styled components _______

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--clr-main);
	min-height: 75vh;
	padding-bottom: 2em;
	overflow-y: scroll;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	border: 2px solid var(--clr-accent);
	border-top: none;
`

const Section = styled.section`
	align-item: flex-start;
`

const ListBtn = styled.button`
	padding: 0.1em 0.1em 0;
	border: none;
	position: relative;
	cursor: pointer;
	background: var(--clr--main);
	align-self: end;

	@media (min-width: 667px) {
		border-bottom: 2px solid var(--clr-accent);

		&:hover {
			background: var(--clr-secondary);
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
const AddPlus = styled.button`
	background: var(--clr-accent);
	font-family: 'Imprima', 'Ubuntu', sans-serif;
	border: none;
	border-radius: 3px;
	color: none;
	position: absolute;
	right: 42px;
	bottom: -14px;

	&:hover {
		transform: scale(1.2);
		transition: all 0.3s ease-in;
	}
`

const ButtonWrapper = styled.div`
	align-self: flex-start;
`

const DeleteAllbtn = styled.button`
	font-family: 'Imprima', 'Ubuntu', sans-serif;
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
	padding-bottom: 0.05em;
	color: var(--clr-secondary);
	border-bottom: 2px solid var(--clr-accent);
	font-family: 'Imprima', 'Ubuntu', sans-serif;
	align-self: end;
	width: 225px;
	overflow-wrap: break-word;
`
