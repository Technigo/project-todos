import React from 'react';
import { useSelector } from 'react-redux';

import Item from 'components/Item';

const List = () => {
    const items = useSelector(store => store.todos.items);

    return (
        <>
         <div>{items.length}{' '}{items.length ===1 ? 'task' : 'tasks' }</div>
            {items.map(item => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isComplete={item.isComplete}
                />
            ))}
        </>
    );
};

export default List; 