import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import { Item } from './Item';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 0;
  color: #3f3f3f;
`;

export const List = () => {
  const items = useSelector(store => store.todos.items);

  return (
    <>
      <ListContainer>
        {items.map((item) => (
          <Item key={item.id} 
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}></Item>
        ))}
      </ListContainer>
    </>
  );
};
