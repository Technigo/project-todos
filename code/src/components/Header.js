import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// import todos from "reducers/todos";

const Headerbox = styled.header `
    border: 1px solid;
    border-color: #554D45;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    position: relative;
`


const Header = () => {
    const todoList = useSelector((store) => store.todos.items)

    const tasksTodo = todoList.length > 1
    const onetaskTodo = todoList.length === 1
    const notasksTodo = todoList.length === 0

    const uncompletedTodos = todoList.filter(item => item.isDone === false)
    const show = uncompletedTodos.length > 0
    return (
        <Headerbox>
        <h1>Welcome!</h1>
        <div>
            {onetaskTodo && <h2>You´ve got {todoList.length} todo in your list</h2>}  
            {tasksTodo && <h2>You´ve got {todoList.length} todos in your list</h2>}
            {notasksTodo && <h2>You´ve got no todos in your list!🎉</h2>}
        </div>
        <div>{show && <h2>{uncompletedTodos.length} of them are uncompleted.</h2>}</div>
     
        
        </Headerbox>
    )
}

export default Header