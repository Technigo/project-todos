import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoSummary from './TodoSummary';
import Button from './Button';
import CreateTodo from 'pages/CreateTodo';
import { todos } from '../reducers/todos';



const TodoList = () => {
  const [category, setCategory] = useState('')

  const list = useSelector((store) => {
    if (!category) return store.todos.list.items
    else return store.todos.list.items.filter((item) => item.category === category)
  });
  console.log(list)

  //fattar inte riktigt denna... 
  const categories = useSelector(store => store.todos.list.categories)
  console.log(`TodoList ${categories}`)

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
        {list.map((item, index) => (
          <TodoItem key={index} itemIndex={index} />
        ))}
        {/* <TodoItem />  */}
      
        <label htmlFor="category">Choose a category:</label>
        <select 
          name="category" 
          id="category" 
          onChange={(event) => setCategory(event.target.value)} 
          value={category}>
          {categories.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
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