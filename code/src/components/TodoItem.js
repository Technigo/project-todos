import React from "react";
import styled from 'styled-components';

import TodoTags from "./TodoTags.js";
import TodoCompleted from "./TodoCompleted.js";
import TodoDelete from "./TodoDelete.js";
import TodoCreatedAt from "./TodoCreatedAt.js";


const TodoListItem = styled.div `
        border-bottom: 5px solid black;
        margin: 20px 0;
        padding: 0 0 20px 0;
        position: relative;

    `
    const TodoItemHeading = styled.h2 `
        margin: 0 0 10px 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 700;

    `
    
    const TodoItemDescription = styled.p `
        font-size: 1rem;
        padding: 0;
        margin: 0 0 20px 0;
    `
    const ContainerBottom = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    

const TodoItem = ({ todo, index }) => {

    
    return (
        <TodoListItem>
            <TodoItemHeading>
                TO DO: {todo.title}
            </TodoItemHeading>
            <TodoItemDescription>
                {todo.whatToDo}
            </TodoItemDescription>
            <TodoTags tags={todo.tags} />
            <ContainerBottom>
                <TodoCreatedAt createdAt={todo.createdAt}/>
                <TodoCompleted todo={todo} />
            </ContainerBottom>
            <TodoDelete index={index} todo={todo} />
        </TodoListItem>
    );
}

export default TodoItem;