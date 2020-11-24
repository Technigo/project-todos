import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoSummary from './TodoSummary';
import Button from './Button';
//import CreateTodo from 'pages/CreateTodo';
import { todos } from '../reducers/todos';
import RemoveAll from './RemoveAll';
import Header from './Header';
import styled from 'styled-components';
import TodoAccordion from "./TodoAccordion";

const TodoList = () => {
  const dispatch = useDispatch();
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
    else return store.todos.list.items 
    //if (!filteredComplete || filteredComplete === 'all') return store.todos.list.items 
  });
  console.log(list)
  console.log(filteredComplete)
  console.log(filteredCategory)



  //fattar inte riktigt denna... var pga local storage som just nu är utkommenterad
  const categories = useSelector(store => store.todos.list.categories)
  console.log(`TodoList ${categories}`)

  

  //const homePage = useSelector((store) => store.todos.homePage); 

  //const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(todos.actions.createTodo())
  // }

  return (
    <>
    {/* <Header /> */}
    <Container>
      <Filter>
        <label htmlFor="category">Category:
          <select 
            name="category" 
            id="category" 
            onChange={(event) => setFilteredCategory(event.target.value)} 
            value={filteredCategory}>
            {categories.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label htmlFor="status">Status:
          <select 
            name="status" 
            id="status" 
            onChange={(event) => setFilteredComplete(event.target.value)} 
            //onChange={(event) => onChangeFilter(event.target.value)}
            value={filteredComplete}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='not completed'>Not completed</option>
          </select>
        </label>
      </Filter>
      {/* <TodoAccordion 
        accordionText='Hello'
      /> */}
        {list.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}   
        
    </Container>
    <RemoveAll />
    </>
  )
}
export default TodoList;

const Container = styled.div `
  padding: 20px;
  display: grid;
  grid-row-gap: 20px;
`

const Filter = styled.div `
  display: flex;
  justify-content: space-between;
`