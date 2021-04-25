import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { TodoCounter } from "./TodoCounter";
import { TodoItem  } from "./TodoItem";
import { NoTodo } from "./NoTodo";

//TASKLIST
export const Todos = () => {
    const allTodos = useSelector(store => store.todos.items)

if (allTodos.length <= 0) {
    return (
        <MainSection>
            <NoTodo />
        </MainSection>
    );
    } else {
    return (
        <MainSection>
        {allTodos.map(todo => (
            <TodosContainer key={todo.id}>
                <TodoItem todo={todo}></TodoItem>
            </TodosContainer>
        ))}
        <TodoCounter />
        </MainSection>
    );
    }
} 

const MainSection = styled.section`
    display: flex;
    width: 300px;
    height: 170px;
    flex-direction: column;
        @media (min-height: 800px) {
            height: 300px;
        }
        @media (min-width: 768px) {
            height: 300px;
            width: 480px;
        }
`;

const TodosContainer = styled.article`
    display: flex;
    width: 100%;
    background-color: #fff;
`;

