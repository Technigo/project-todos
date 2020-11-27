import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import EmptyList from './EmptyList';
import TodoItem from './TodoItem';
import RemoveButton from './RemoveButton';
import ActionBar from './ActionBar';
import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector(store => store.todos.list.items);
  const filterStatus = useSelector(
    store => store.todos.list.selectedStatusFilter
  );
  const filterCategory = useSelector(
    store => store.todos.list.selectedCategoryFilter
  );
  const categories = useSelector(store => store.todos.list.categories);
  //const [category, setCategory] = useState('');

  const onFilterByStatus = value => {
    console.log(value);
    dispatch(todos.actions.filterByStatus(value));
  };

  const onFilterByCategory = value => {
    dispatch(todos.actions.filterByCategory(value));
  };

  const filteredList = list.filter(item => {
    if (filterStatus === 'complete') {
      return item.isComplete;
    } else if (filterStatus === 'not complete') {
      return !item.isComplete;
    } else return item;
  });

  // const filteredList = list.filter(item => {
  //   if (filterCategory) {
  //     if (filterStatus === 'not complete') {
  //       return item.category === filterCategory && !item.isComplete;
  //     } else if (filterStatus === 'complete') {
  //       return item.category === filterCategory && item.isComplete;
  //     } else return item.category === filterCategory;
  //   } else if (filterStatus === 'complete') {
  //     return item.isComplete;
  //   } else if (filterStatus === 'not complete') {
  //     return !item.isComplete;
  //   } else return item;
  // });

  // const list = useSelector(store => {
  //   if (!category || category === 'all') return store.todos.list.items;
  //   else
  //     return store.todos.list.items.filter(item => item.category === category);
  // });
  // const categories = useSelector(store => store.todos.list.categories);

  return (
    <>
      <Main>
        <ActionBarContainer>
          <ActionBarButton
            type="button"
            value="all"
            onClick={event => onFilterByStatus(event.target.value)}
          >
            <ActionBarText>All</ActionBarText>
          </ActionBarButton>
          <ActionBarButton
            type="button"
            value="complete"
            onClick={event => onFilterByStatus(event.target.value)}
          >
            <ActionBarText>Complete</ActionBarText>
          </ActionBarButton>
          <ActionBarButton
            type="button"
            value="not complete"
            onClick={event => onFilterByStatus(event.target.value)}
          >
            <ActionBarText>Not Complete</ActionBarText>
          </ActionBarButton>
        </ActionBarContainer>
        {/* <label htmlFor="category">Choose a category:</label> */}
        {/* <select
          name="category"
          id="category"
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value="">Filter by:</option>
          <option value="all">All</option>
          {categories.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select> */}
        {list.length === 0 ? (
          <EmptyList />
        ) : (
          <>
            <ListSection>
              {filteredList.map(item => (
                <TodoItem key={item.id} item={item} />
              ))}
            </ListSection>
            {/* <RemoveButton /> */}
            <ActionBar />
          </>
        )}
      </Main>
    </>
  );
};

export default TodoList;

const Main = styled.main`
  display: grid;
  grid-gap: 20px;
`;

const ListSection = styled.section`
  display: grid;
  padding: 25px;
`;

const ActionBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #fff;
`;

const ActionBarButton = styled(Button)`
  background: #fff;
  border-radius: 0;
`;
const ActionBarText = styled.p``;
