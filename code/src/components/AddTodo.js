import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsFillPlusCircleFill } from 'react-icons/bs'

import todos from '../reducers/todos'

import './AddTodo.css'

const AddTodo = () => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input))
        setInput('')
	}	


	return (
		<>
		<section className="todo-container">
			<div className="todo-form">
					<input
						type="text"
						placeholder="Write new task..."
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
				<button
					className="add-btn" 
					disabled={input === ''}
					onClick={onAddTodo}>
						<BsFillPlusCircleFill />
				</button>
			</div>
		</section>
		</>
	)
}

export default AddTodo