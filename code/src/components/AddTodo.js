import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsFillPlusCircleFill } from 'react-icons/bs'

import Manager from './Manager'
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
			<div className="todo-input">  
				<input
					type="text"
					placeholder="Write new task..."
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				</div>
				<button
					className="add-btn" 
					disabled={input === ''}
					onClick={onAddTodo}>
						<BsFillPlusCircleFill />
				</button>
				</div>
				<Manager />
		</section>
		</>
	)
}

export default AddTodo