import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoSummary from './TodoSummary';
import Button from './Button';
import CreateTodo from 'pages/CreateTodo';
import { todos } from '../reducers/todos';



const TodoList = () => {
  const list = useSelector(store => store.todos.list);
  console.log(list)

  const homePage = useSelector((store) => store.todos.homePage); 

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.createTodo())
  }

  return (
    <section>
      {!homePage ? (
      <>
      <h1>My Todo list</h1>
      <Button 
          onClick = {() => handleClick()}
          text="Create a todo"
          type="button" 
          className="create-todo-button"
        />
        {/* <TodoInput/>  */}
        {/* {list.items.map(item => item.description)} */}
        {list.items.map((item, index) => (
          <TodoItem key={index} itemIndex={index} />
        ))}
        {/* <TodoItem />  */}
        <TodoSummary /> 
        
      </>
      ):(
        <CreateTodo /> 
      )
    }

   
    </section>
  )
}
export default TodoList;

/*
- show TodoInput
- show each TodoItem in the list
- show TodoSummary 

*/ 