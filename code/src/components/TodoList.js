import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";
import TodoItem from './TodoItem.js';

const TodoCounter = styled.p `
    border-bottom: 5px solid black;
    border-top: 5px solid black;
    margin: 0 0 15px 0;
    padding: 5px 0;
    background-color: #ccc;
`

const FilterTagsContainer = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-top: 5px solid black;
    padding: 10px 0;
`

const ClearButton = styled.button `
border: 2px solid #000;
background-color: #ccc;
padding: 2px 8px;
height: 35px;
font-weight: 600;
text-transform: uppercase;
box-shadow: 3px 3px 4px;
    &:hover {
        background-color: #f05cb5;
        cursor: pointer;
        box-shadow: 1px 1px 1px;
    }
`

const TodoList = () => {
    const todoList = useSelector((store) => store.todos.items);
    const numberOfTodos = todoList.length;
    const completedTodos = todoList.filter((todo) => {
        return todo.isCompleted === true;
    });

    let tagFilter = useSelector((store) => store.todos.tag);

    const dispatch = useDispatch();

    const clearTagFilter = () => {
        tagFilter = '';
        dispatch(todos.actions.clearTagFilter(tagFilter));
    }
            
    return (
        <div className="container">
            {tagFilter &&
            <FilterTagsContainer>
                <p>Filtered by tag: {tagFilter}</p>
                <ClearButton type="button" onClick={() => clearTagFilter(tagFilter)}>Clear filter</ClearButton>
            </FilterTagsContainer>
            }

            { numberOfTodos === 0 ? 
                <p>Hurray! You don't have any todos.</p> : 
                <TodoCounter>You have completed {completedTodos.length} of {numberOfTodos} todos.</TodoCounter> 
            }

            {todoList.map((todo, index) => (
                (!tagFilter || todo.tags.includes(tagFilter)) && 
                <TodoItem index={index} key={todo.id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;