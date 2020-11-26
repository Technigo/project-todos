import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import ToDoItem from './ToDoItem';


const ToDoList = () => {
    const items = useSelector(store => store.todos.items);

    return (
        <Container>
            <div>
            {items.map(item => (
                <ToDoItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isCompleted={item.isCompleted}
                />
            ))}
             </div>
        </Container>
    );
};

export default ToDoList;

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: #fff
`;




