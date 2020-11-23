import React from 'react';
import {useSelector} from 'react-redux';
//import {todos} from '../reducers/todos';

import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

export const List = () =>{

  //All the items in the store
  const itemsList = useSelector((store) => store.todos.list);
  
  return (
    <section className="todo-list-wrapper">
 
      <TodoInput />
      <ul className="todo-list">
      {
        itemsList.items.map((item,index) => 
        <TodoItem itemIndex={index} />)
      }
      </ul>
    </section>
  )
}