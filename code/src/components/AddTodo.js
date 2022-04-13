import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import plusBtn from '../assets/plus.svg'
// import addBtn from '../assets/add.svg'
import todo from '../reducers/todo'

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
`
// &:hover {
//   transform: scale(1.2);
// }

// const AddImg = styled.img`
// 	position: absolute;
// 	left: -25px;
// 	top: 1em;
// `

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
				onChange={(e) => setInput(e.target.value)}
			/>
			<AddBtn type='submit' onClick={onAddTodo} disabled={input.length === 0}>
				{/* <AddImg src={addBtn} alt='add task'></AddImg> */}
				<AddPlus src={plusBtn} alt='add task'></AddPlus>
			</AddBtn>
		</div>
	)
}

export default AddTodo
