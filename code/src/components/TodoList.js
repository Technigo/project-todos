import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TodoInput from './TodoInput';
import Item from './Item';

const ListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
`;


const TodoList = () => {
    const items = useSelector(store => store.todos.items);
    // console.log(items);

    return (
        <ListContainer>
            <TodoInput />
            {items.map((item) => (
                <Item key={item.id} 
                    item={item.text} 
                    id={item.id}
                    isComplete={item.isComplete}
            />
            ))}
            
        </ListContainer>
        );
};

export default TodoList;



