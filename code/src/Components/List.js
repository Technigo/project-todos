import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasks } from '../Reducers/tasks'

import { Item } from './Item';
import { UserInput } from './UserInput';
import { Button } from '../library/Button'

export const List = () => {
  //This useSelector helps us get a hold of the items inside our store (tasks)

  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch()

  return (
    <>
      <UserInput />
      <ul>
        {items.map((item) => {
            console.log(item)
            return(
              <Item key={item.id} item={item} />  
            )
        })}
      </ul>
    {/*Where to put this button? When clicked I get error because of map*/}
      <Button onClick={() => dispatch(tasks.actions.removeAll())}>Clear List</Button>
    </>
  );
};
