import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const TodoForm = () => {
	const [value, setValue] = useState('')

	const dispatch = useDispatch()

	const onFormSubmit = (e) => {
		e.preventDefault()

		const newTodo = {
			id: uniqid(),
			description: value,
			isComplete: false,
		}

		dispatch(todos.actions.addTodo(newTodo))
		setValue('')
	}

  return (
		<form className="form-container" onSubmit={onFormSubmit}>
			<input 
				className="form-input"
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button className="submit-btn" type="submit">Add todo</button>
		</form>	
  )
}

export default TodoForm