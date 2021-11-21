import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { RiDeleteBinLine } from 'react-icons/ri'


import todos from '../reducers/todos'

import './TodoList.css'


const TodoList = () => {
	const items = useSelector((store) => store.todos.items)
	const dispatch = useDispatch()
   

	const onCompleteChange = (id) => {
		dispatch(todos.actions.completeChange(id))	
	}

	const onDeleteTodo = (id) => {
		dispatch(todos.actions.deleteTodo(id))
	}

	return (
		<section className="container">
			{items.map((item) => (
			<div className="item-container">
				<div className={`item ${item.done && 'done'}`} key={item.id}>
					<input
                        className="completed-item"
						type="checkbox"
						checked={item.done}
						onChange={() => onCompleteChange(item.id)}
					/>
                    <div className="text-container">
                        <p className="todo-text">{item.text}</p>
                        <p className="date">Created: {moment(item.id).calendar()}</p>
                    </div>
					<button 
						className="delete-btn"
						onClick={() => onDeleteTodo(item.id)}>
						<RiDeleteBinLine />
					</button>
					</div>
			</div>
			))}
		</section>
	)
}

export default TodoList
