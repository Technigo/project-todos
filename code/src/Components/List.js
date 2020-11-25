import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasks } from '../Reducers/tasks'

import { Item } from './Item';
import { UserInput } from './UserInput';

export const List = () => {
  //This useSelector helps us get a hold of the items inside our store (tasks)

  const items = useSelector((store) => store.tasks.items);

  return (
    <>
      <ul>
        {items.map((item) => {
            return(
              <Item key={item.id} item={item} />  
            )
        })}
      </ul>
    </>
  );
};
