import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import TodoItem from './TodoItem';

import { FilterSelect } from '../lib/Select';
import EmptyTodoList from './EmptyTodoList';

const TodoList = () => {
  //const dispatch = useDispatch();
  const [filteredCategory, setFilteredCategory] = useState('')
  const [filteredComplete, setFilteredComplete] = useState('')

  ////const FILTER_COMPLETE = "completed"
  ////const FILTER_NOT_COMPLETE = "not completed"
  //const [filter, setFilter] = useState('')

  //const list = useSelector(store => store.todos.list.items)

  // const onChangeFilter = (event) => {
  //   dispatch (
  //     todos.actions.filterTodoStatus({
  //       filter: filteredComplete,
  //     })
  //   ) 
  // }



  //const filterTodo = useSelector(store => )
  
  const list = useSelector(store => {
    if (filteredComplete === 'completed') return store.todos.list.items.filter(item => item.complete)
    else if (filteredComplete === 'not completed') return (store.todos.list.items.filter(item => !item.complete))
    else if (filteredCategory) return store.todos.list.items.filter(item => item.category === filteredCategory)
    else if (filteredCategory === 'all') return store.todos.list.items 
    else return store.todos.list.items 
  });
  console.log(list)

  const todoList = useSelector((store) => store.todos.list);
  console.log(todoList)
  const listLength = todoList.items.length;
  console.log(todoList.items.length)

  const categories = useSelector(store => store.todos.list.categories)
  console.log(`TodoList: ${categories}`)

  return (
    <Container>
      {listLength === 0 
      ? <EmptyTodoList /> 
      : 
      <>
      <Filter>
        {/* <FilterLabel htmlFor="category">Category: */}
        <FilterSelect 
          name="category" 
          id="category" 
          onChange={(event) => setFilteredCategory(event.target.value)} 
          value={filteredCategory}
          >
          <option value="all">All</option>
          {categories.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </FilterSelect>
        {/* </FilterLabel> */}

        {/* <FilterLabel htmlFor="status">Status: */}
        <FilterSelect 
          name="status" 
          id="status" 
          onChange={(event) => setFilteredComplete(event.target.value)} 
          //onChange={(event) => onChangeFilter(event.target.value)}
          value={filteredComplete}>
          <option value='status'>Status</option>
          <option value='completed'>Completed</option>
          <option value='not completed'>Not completed</option>
        </FilterSelect>
        {/* </FilterLabel> */}
      </Filter>
      {list.map((item) => (
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