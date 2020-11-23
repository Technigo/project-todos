import React from 'react';
import {useSelector} from 'react-redux';

//import {todos} from '../reducers/todos';

import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { TodoSummary } from './TodoSummary';
import { EmptyList } from './EmptyList';
import { ListActionBar } from './ListActionBar';

export const List = () =>{

  //All the items in the store
  const itemsList = useSelector((store) => store.todos.list);
  const listLength = itemsList.items.length;
  console.log(itemsList.items.length)

  return (
    <section className="todo-list-wrapper">
      <TodoInput />
       {listLength === 0 ? <EmptyList /> : <>
        <ul className="todo-list">
          <ListActionBar />
        {
          itemsList.items.map((item,index) => 
          <TodoItem key={index} itemIndex={index} />)
        }
           
        </ul>
         <TodoSummary /></>
        }
       
    </section>
  )
}