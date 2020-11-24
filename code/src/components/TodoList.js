import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import EmptyList from './EmptyList';
import TodoItem from './TodoItem';
import RemoveButton from './RemoveButton';

const TodoList = () => {
  const [category, setCategory] = useState('');

  const list = useSelector(store => {
    if (!category || category === 'all') return store.todos.list.items;
    else
      return store.todos.list.items.filter(item => item.category === category);
  });
  const categories = useSelector(store => store.todos.list.categories);
  console.log(`TodoList ${categories}`);

  return (
    <>
      <Main>
        {list.length === 0 ? (
          <EmptyList />
        ) : (
          <>
            {/* <label htmlFor="category">Choose a category:</label> */}
            <select
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
            </select>
            <section>
              {list.map((item, index) => (
                <TodoItem key={item.id} item={item} />
              ))}
            </section>
            <RemoveButton />
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
  padding: 25px;
`;
