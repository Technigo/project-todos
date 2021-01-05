import { TodoFormWrapper } from 'lib/FormStyle';
import React from 'react';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { todos } from "reducers/todos";
import {TodoForm} from './TodoForm'

const AddTodo = () => {
  const dispatch = useDispatch();
  const history = useHistory();


  const newTodo = (todoTitle, todoContent) => {
      console.log()
    dispatch(
      todos.actions.addItem({ 
        id: uniqid(),
        title: todoTitle,          
        content: todoContent,
        createdAt: Date.now(),
      })
    );
    console.log( "hello")
    history.push("/");
  }

  return (
      <TodoFormWrapper>
        <h1>Add Todo</h1>
          <TodoForm handle={newTodo} todo={{}}/>
      </TodoFormWrapper>
    )
  };

export default AddTodo;