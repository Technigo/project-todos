import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { todos } from '../reducers/todos';
import EmptyTodoList from './EmptyTodoList';
import TodoItem from './TodoItem';
import ActionButtons from './ActionButtons';
import { FilterSelect } from '../lib/Select';

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector(store => store.todos.list.items);
  const filteredTodoStatus = useSelector(store => store.todos.list.selectedFilterStatus);
  const filteredTodoCategory = useSelector(store => store.todos.list.selectedFilterCategory);
  const categories = useSelector((store) => store.todos.list.categories);

  const filteredTodosStatus = (value) => {
    dispatch (
      todos.actions.filteredStatus(value)
    );
  };

  const filteredTodosCategory = (value) => {
    dispatch (
      todos.actions.filteredCategory(value)
    );
  };

  const filteredList = list.filter(item => {
    if (filteredTodoCategory) {
      if (filteredTodoStatus === 'not complete') {
        return item.category === filteredTodoCategory && !item.complete;
      } else if (filteredTodoStatus === 'complete') {
        return item.category === filteredTodoCategory && item.complete;
      } else return item.category === filteredTodoCategory;
    } else if (filteredTodoStatus === 'complete') {
      return item.complete;
    } else if (filteredTodoStatus === 'not complete') {
      return !item.complete;
    } else return item;
  });

  return (
    <Container>
      <ListWrapper>
        {list.length === 0 ? (
          <EmptyTodoList /> 
        ) : (
          <>
            <Filter>
              <FilterSelect 
                onChange={(event) => filteredTodosCategory(event.target.value)}
                value={filteredTodoCategory}
                >
                <option value="">Category</option>
                {categories.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </FilterSelect>
              <FilterSelect  
                value={filteredTodoStatus}
                onChange={(event) => filteredTodosStatus(event.target.value)}
              >
                <option value='status'>Status</option>
                <option value='complete'>Complete</option>
                <option value='not complete'>Not complete</option>
              </FilterSelect>
            </Filter>
            {filteredList.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))};         
            <ActionButtons />
        </>
        )};
      </ListWrapper>
    </Container>
  );
};
export default TodoList;

const Container = styled.main `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: #fff;
  height: 100vh;
`;

const ListWrapper = styled.section`
  max-width: 700px;
  width: 100%;
`;

const Filter = styled.div `
  display: flex;
  justify-content: space-between;
`;