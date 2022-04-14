import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import plusBtn from '../assets/plus.svg'
import todo from '../reducers/todo'

const StyledInput = styled.input`
	font-size: 16px;
	height: 30px;
	letter-spacing: 1.5px;
	color: var(--clr-secondary);
	text-align: center;
	width: 328px;
	border: none;
	border-bottom: 2px solid var(--clr-accent);
	background-color: var(--clr-main-opacity);
	margin-bottom: 1.5em;

	&:focus {
		border: 2px solid var(--clr-accent);
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

	&:hover {
		transform: scale(1.2);
		transition: all 0.3s ease-in;
	}
`

const AddTodo = () => {
	const [input, setInput] = useState('')

	const dispatch = useDispatch()

	const onAddTodo = () => {
		dispatch(todo.actions.addTodo(input))
		setInput('')
	}

	return (
		<div className='input-wrapper'>
			<StyledInput type='text' value={input} onChange={(e) => setInput(e.target.value)}></StyledInput>
			<AddBtn type='submit' onClick={onAddTodo} disabled={input.length === 0}>
				<AddPlus src={plusBtn} alt='add task'></AddPlus>
			</AddBtn>
		</div>
	)
}

export default AddTodo
