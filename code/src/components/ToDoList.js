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
    
    const [category, setCategory] = useState('');
    const items = useSelector((store) => {    
        if (!category) return store.todos.items
        else store.todos.items.filter(item => item.category === category)
    });
  
    
        return (
            <Container>
                <label>
                    Category:
                <Select
                    value={category}
                    onchange={(e) => setCategory(e.target.value)}>
                        <option value = 'fun'>Fun</option>
                        <option value = 'work'>Work</option>
                        <option value = 'home'>Home</option>
                    </Select>
                </label>
                <ul>
                {items.map(item => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        name={item.text}
                    />
                ))}
                </ul>
         
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






