import React from 'react';
import { useSelector} from 'react-redux';

import { Item } from './Item';
import { ListWrapper } from '../library/Containers';

export const List = () => {
  //This useSelector helps us get a hold of the items inside our store (tasks)

  const items = useSelector((store) => store.tasks.items);

  return (
    <>
      <ListWrapper>
        {items.map((item) => {
            return(
              <Item key={item.id} item={item} />  
            )
        })}
      </ListWrapper>
    </>
  );
};
