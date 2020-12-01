import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import EmptyList from './EmptyList';
import TodoItem from './TodoItem';
import ListFooter from './ListFooter';
import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector(store => store.todos.list.items);
  const filterStatus = useSelector(
    store => store.todos.list.selectedStatusFilter
  );

  const onFilterByStatus = value => {
    dispatch(todos.actions.filterByStatus(value));
  };

  const filteredList = list.filter(item => {
    if (filterStatus === 'complete') {
      return item.isComplete;
    } else if (filterStatus === 'not complete') {
      return !item.isComplete;
    } else return item;
  });

  return (
    <>
      {list.length !== 0 ? (
        <>
          <Main>
            <Container>
              <FilterButton
                type="button"
                value="all"
                onClick={() => onFilterByStatus('all')}
              >
                All
              </FilterButton>
              <FilterButton
                type="button"
                value="complete"
                onClick={() => onFilterByStatus('complete')}
              >
                Complete
              </FilterButton>
              <FilterButton
                type="button"
                value="not complete"
                onClick={() => onFilterByStatus('not complete')}
              >
                Active
              </FilterButton>
            </Container>
            <ListSection>
              {filteredList.map(item => (
                <TodoItem key={item.id} item={item} />
              ))}
            </ListSection>
          </Main>
          <ListFooter />
        </>
      ) : (
        <Main>
          <EmptyList />
        </Main>
      )}
    </>
  );
};

export default TodoList;

const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  background: #fff;
`;

const ListSection = styled.section`
  display: grid;
  grid-auto-rows: min-content;
  padding: 0 25px;
  background-color: #f4f5fa;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #fff;
`;

const FilterButton = styled(Button)`
  background: #fff;
  border-radius: 0;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  transition: all 0.1s ease 0s;
  color: #808080;

  :hover {
    border-bottom: 1px solid red;
    color: red;
  }

  :focus {
    border-bottom: 1px solid red;
    color: red;
  }

  :active {
    border-bottom: 1px solid red;
    color: red;
  }
`;
