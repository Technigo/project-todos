import React from 'react';
import { useSelector } from 'react-redux';

import Item from 'components/Item';
import { ListContainer, ListDate } from 'styled-components/List';

const List = () => {
    const items = useSelector(store => store.todos.items);
    const date = new Date();
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const todaysDate = date.toLocaleDateString('en-GB', options);


    return (
        <>
            <ListContainer>
                {items.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        isComplete={item.isComplete}
                    />
                ))}
            </ListContainer>
            <ListDate>{todaysDate}</ListDate>
        </>
    );
};

export default List; 