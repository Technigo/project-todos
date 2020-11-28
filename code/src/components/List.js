import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import { Item } from './Item';
import { todos } from 'reducers/todos';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 0;
  color: #3f3f3f;
`;
const Button = styled.button`
  color: #3f3f3f;
  font-size: 18px;
  margin: 6px;
  padding: 6px;
  border: 1.5px solid #3f3f3f;
  border-radius: 1.5px;
    &:hover {
      background-color:#b83b5e;
      color:white;
      border:white
    }
`

export const List = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  const onRemoveAll = () => {
    dispatch(todos.actions.removeAll());
  }
  return (
    <>
      <ListContainer>
        {items.map((item) => (
          <Item key={item.id} 
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}></Item>
        ))}
        <Button onclick={onRemoveAll}>Clear all</Button>
      </ListContainer>
    </>
  );
};
