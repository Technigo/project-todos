import React from 'react';
import { useSelector } from 'react-redux';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoSummary from './TodoSummary';

const TodoList = () => {
  const list = useSelector(store => store.todos.list);
  console.log(list)

  return (
    <section>
      <TodoInput/> 
        {/* {list.items.map(item => item.description)} */}
        {list.items.map((item, index) => (
          <TodoItem key={index} itemIndex={index} />
        ))}
      {/* <TodoItem />  */}
      <TodoSummary /> 
    </section>
  )
}
export default TodoList;

/*
- show TodoInput
- show each TodoItem in the list
- show TodoSummary 

*/ 