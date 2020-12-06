import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';



import ToDoItem from './ToDoItem';

const Select = styled.select`
    height: 20px;
    background-color: #fff;
    font-size: 18px;
    margin: 4px;
`

export const ToDoList = () => {
   
    const items = useSelector(store => store.todos.items);
    const todoCount = items.length
 
  
    
        return (
            <Container>
                
                {items.map(item => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        done={item.isCompleted}
                    />
                    
                ))}
      {todoCount}
         
            </Container>
        )
    }

// export default ToDoList;

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






