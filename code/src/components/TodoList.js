import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';


const TodoList = () => {
	const items = useSelector((store) => store.todos.items);

	const dispatch = useDispatch();

  // dispatching created reducers
	const onToggleTodo = (id) => {
		dispatch(todos.actions.toggleTodo(id));
	};

	const onDeleteTodo = (id) => {
		dispatch(todos.actions.deleteTodo(id));
	};

	//Styling
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 2;
  `;
const TodoItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    background-color: #edf5e1;
    height: 32px;
    width: 80%;
    margin-left: 5px;
    margin-right: 10px;
    margin-top:5px;
    border-radius: 5px;
    `;

    const Deletebutton = styled.button`
    border: none;
    background-color: red;
    padding: 8px 8px;
    border-radius: 5px;
    font-weight: 700;
    color: white;
    width: 65px;
    `;

    const Checkbox = styled.input`
    margin-left: 25px;
    margin-right: 5px;
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #05386B;
    border-radius: 5px;
  `
    //displaying all the possible actions
    return (
  
    
    <section>
        {items.map((item, index) =>(
            <Container key={item.id}>
                  <Checkbox
                        type="checkbox" 
                        checked={item.isComplete} 
                        onChange={() => onToggleTodo(item.id)}
                />
                 <TodoItem>{item.text}</TodoItem>
                <Deletebutton onClick={() => onDeleteTodo(index)}>Delete</Deletebutton>
            </Container>
        ))}
    </section>

    );
  
};
export default ToDoList; 