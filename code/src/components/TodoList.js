import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'
import todos from '../reducers/todos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export const TodoList = () => {
	const items = useSelector((store) => store.todos.items)

	const dispatch = useDispatch()

  const trashCanIcon = <FontAwesomeIcon icon={faTrashAlt} />
  

	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id))
	}

	const onDeleteTodoImmutability = (id) => {
		dispatch(todos.actions.deleteTodo(id))
	}

	return (
		<TodoContainer>
			{items.map((item, index) => (
				<TodoTasks className="flex-item" key={item.id}>
          	<CustomCheckbox
						type="checkbox"
						checked={item.isComplete}
						onChange={() => onToggleTodo(item.id)}
					/>
					<p>{item.text}</p>
				
					<DeleteButton onClick={() => onDeleteTodoImmutability(item.id)}>{trashCanIcon}</DeleteButton>
          
				</TodoTasks>
			))}
		</TodoContainer>
	)

}

const TodoContainer = styled.section`
  padding: 20px 35px 0 35px;

`
const CustomCheckbox = styled.input`
  border-radius: 50px;
`
const TodoTasks = styled.div`

`
const DeleteButton = styled.button`
  border: none;
  
  &:hover {
    color: gray;

    }
`

