import React from 'react';
import { useSelector } from 'react-redux';

import { Item } from './Item';
import { UserInput } from './UserInput';

export const List = () => {
  //This useSelector helps us get a hold of the items inside our store (tasks)
  const items = useSelector((store) => store.tasks.items);

  return (
    <>
      <UserInput />
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
