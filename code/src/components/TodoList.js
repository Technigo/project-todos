import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';


const TodoList = () => {
	const items = useSelector((store) => store.todos.items);

	const dispatch = useDispatch();

	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id));
	};

	const onDeleteTodo = (id) => {
		dispatch(todos.actions.deleteTodo(id));
	};

	//Styling

const TodoItemText = styled.div`
  display: flex;
  flex-direction:column;
  flex-grow: 2;
  `;
const Todo= styled.p`
font-size:10px;
${({ isComplete }) =>
            isComplete &&
`
const Checkbox= styled.input`
   width: 20px;
   margin: 0 20px;
   &:active + ${({ Todo })} {
    background-color: green;
     }
  `;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fffbfb54;
 
  @media (min-width: 768px) {
    margin-left: 80px;
    margin-right: 80px;
    padding-top: 25px;
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (min-width: 1366px) {
    margin-left: 120px;
    margin-right: 120px;
    padding-right: 50px;
    padding-left: 50px;
  }
`;

const DeleteButton = styled.button`
  background-color: #3b8cb4;
  border: 1px solid #337b9e;
  @media (min-width: 768px) {
    &:hover {
      background-color: #276a8b;
    }
  }
`;


	const completeItem = (item) => {
    if (item.isComplete) {
      return "line-through";
    } else {
      return "none";
    }
  };

	return (

<Container key={item.id}>
		<Checkbox 
						type= "checkbox"
						checked={item.isComplete}
						onChange= {() => onToggleTodo(item.id)}

		

{items.map((item) => (
				<Todo
				
				<div className="checkboxWrapper">
				<Checkbox>
					
						/>
				</div>
						  <p style={{ textDecoration: completeItem(item) }}>{item.text}</p>
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>

			
			</Todo>
			</Checkbox>
				</DeleteButton>
			))}

		</Container>
	
	      )};
	

export default TodoList;