import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyledInput, AddBtn, AddPlus } from './Styling'

import plusBtn from '../assets/plus.svg'
import todo from '../reducers/todo'

const AddTodo = () => {
	const [input, setInput] = useState('')

	const dispatch = useDispatch()

	const onAddTodo = () => {
		dispatch(todo.actions.addTodo(input))
		setInput('')
	}

	return (
		<div className='input-wrapper'>
			<StyledInput
				type='text'
				value={input}
				placeholder='Add task here..'
				onChange={(e) => setInput(e.target.value)}
			></StyledInput>
			<AddBtn type='submit' onClick={onAddTodo} disabled={input.length === 0}>
				<AddPlus src={plusBtn} alt='add task'></AddPlus>
			</AddBtn>
		</div>
	)
}

export default AddTodo
