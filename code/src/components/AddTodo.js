import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import addBtn from '../assets/add.svg'
import todo from '../reducers/todo'

const AddBtn = styled.button`
	border-radius: 60%;
	padding: 0;
	border: none;
	position: relative;
	cursor: pointer;
`
const AddImg = styled.img`
	position: absolute;
	left: -25px;
	top: 1em;
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
			<input
				type='text'
				value={input}
				// disabled={!value}
				onChange={(e) => setInput(e.target.value)}
			/>
			<AddBtn onClick={onAddTodo}>
				<AddImg src={addBtn} alt='add task'></AddImg>
			</AddBtn>
		</div>
	)
}

export default AddTodo
