import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import styled from 'styled-components';
import { FilterSelect } from '../lib/Select';
import ActionButtons from './ActionButtons';

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
    else return store.todos.list.items 
    //if (!filteredComplete || filteredComplete === 'all') return store.todos.list.items 
  });
  console.log(list)
  // console.log(filteredComplete)
  // console.log(filteredCategory)

  const categories = useSelector(store => store.todos.list.categories)
  console.log(`TodoList: ${categories}`)

  return (
    <Container>
      <Filter>
        {/* <FilterLabel htmlFor="category">Category: */}
          <FilterSelect 
            name="category" 
            id="category" 
            onChange={(event) => setFilteredCategory(event.target.value)} 
            value={filteredCategory}>
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
    </Container>
  )
}
export default TodoList;

const Container = styled.section `
  padding: 20px;
  display: grid;
  grid-row-gap: 20px;
`

const Filter = styled.div `
  display: flex;
  justify-content: space-between;
`
const FilterLabel = styled.label `
  &:first-child {
    margin-right: 10px;
  }
`