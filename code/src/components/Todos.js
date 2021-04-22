import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";


import { DeleteButton } from './DeleteButton';
import { TodoItem  } from './TodoItem';


//TASKLIST
export const Todos = () => {
    const allTodos = useSelector(store => store.todos.items)

if (allTodos.length <= 0) {
    return (
        <MainSection>
            <div>
            <p>No To Do</p>
            </div>
        </MainSection>
    );
    } else {
    
    return (
        <MainSection>
        {allTodos.map(todo => (
            <TodosContainer key={todo.id}>
            <TodoItem todo={todo}></TodoItem>
            <DeleteButton todo={todo} />
            </TodosContainer>
        ))}
        </MainSection>
    );
    }
} 


const MainSection = styled.section`
    display: flex;
    width: 90%;
    height: 300px;
    flex-direction: column;
    padding: 0;

        @media (min-width: 768px) {
            height: 500px;
        }

        @media (min-width: 1024px) {   
    } 
`;
const TodosContainer = styled.article`
    display: flex;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #474747;
    padding: 2px 5px;
    align-items: f;
`;

