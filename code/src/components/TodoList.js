import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import TodoItem from './TodoItem';
import { todos } from '../reducers/todos';

import { FilterSelect } from '../lib/Select';
import EmptyTodoList from './EmptyTodoList';

const TodoList = () => {
  const dispatch = useDispatch();

  const list = useSelector(store => store.todos.list.items);
  console.log(list)

  const filteredTodoStatus = useSelector(store => store.todos.list.selectedFilterStatus)
  console.log(filteredTodoStatus)

  const filteredTodoCategory = useSelector(store => store.todos.list.selectedFilterCategory)
  console.log(filteredTodoCategory)

  const filteredTodos = (value) => {
    dispatch (
      todos.actions.filteredStatus(value)
    )
  }

  const filteredTodosCategory = (value) => {
    dispatch (
      todos.actions.filteredCategory(value)
    )
  }

  const filteredList = list.filter(item => {
    if (filteredTodoCategory) {
      if (filteredTodoStatus === 'not complete') {
        console.log(filteredTodoCategory, filteredTodoStatus)
        return item.category === filteredTodoCategory && !item.complete
      } else if (filteredTodoStatus === 'complete') {
        return item.category === filteredTodoCategory && item.complete
      } else return item.category === filteredTodoCategory

    } else if (filteredTodoStatus === 'complete') {
      return item.complete
    } else if (filteredTodoStatus === 'not complete') {
      return !item.complete
    } else return item
  })

  const todoList = useSelector((store) => store.todos.list);
  //console.log(todoList)

  const listLength = todoList.items.length;
  //console.log(todoList.items.length)

  const categories = useSelector((store) => store.todos.list.categories)
  //console.log(`TodoList: ${categories}`)

  return (
    <Container>
      {listLength === 0 ? <EmptyTodoList /> : 
      <>
      <Filter>
        {/* <FilterLabel htmlFor="category">Category: */}
        <FilterSelect 
          name="category" 
          id="category" 
          onChange={(event) => filteredTodosCategory(event.target.value)} 
          value={filteredTodoCategory}
          >
          <option value="">All</option>
          {categories.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </FilterSelect>
        {/* </FilterLabel> */}

        {/* <FilterLabel htmlFor="status">Status: */}
        <FilterSelect 
          name="status" 
          id="status" 
          value={filteredTodoStatus}
          onChange={(event) => filteredTodos(event.target.value)}
          
          //onChange={(event) => onChangeFilter(event.target.value)}
          >
          <option value='status'>Status</option>
          <option value='complete'>Completed</option>
          <option value='not complete'>Not completed</option>
        </FilterSelect>
        {/* </FilterLabel> */}
      </Filter>
      {filteredList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}           
      <ActionButtons />
      </>
    }
    </Container>
  )
}
export default TodoList;

const Container = styled.section `
  padding: 20px;
  display: grid;
  grid-row-gap: 20px;
`;

const Filter = styled.div `
  display: flex;
  justify-content: space-between;
`;