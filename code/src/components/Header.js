import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// import todos from "reducers/todos";

const Headerbox = styled.header `
    padding: 20px 20px 40px 20px;
    // margin-bottom: 5px;
    border-radius: 5px;
    position: relative;
    background-color: #aac3bd;

    p, h1, h3, h4 {
        margin: 0;
    }

    p {
        font-size: 12px;
    }
    h1 {
        font-size: 40px;
        font-weight: 1000;
    }

    h3 {
        margin-top:10px;
    }
`


const Header = () => {
    const todoList = useSelector((store) => store.todos.items)

     
    const date = new Date().toDateString()
    
    const tasksTodo = todoList.length > 1
    const onetaskTodo = todoList.length === 1
    const notasksTodo = todoList.length === 0

    const completedTodos = todoList.filter(item => item.isDone === true)
    const showOne = completedTodos.length === 1
    const show = completedTodos.length > 1
    return (
        <Headerbox>
            <p>{date}</p>
        <h1>Hi there!</h1>
        <div>
            {onetaskTodo && <h3>You´ve got {todoList.length} todo in your list</h3>}  
            {tasksTodo && <h3>You´ve got {todoList.length} todos in your list</h3>}
            {notasksTodo && <h3>You´ve got no todos in your list!</h3>}
        </div>
        <div>
            {showOne && <h4>{completedTodos.length} of them is completed.</h4>}
            {show && <h4>{completedTodos.length} of them are completed.</h4>}
        </div>
     
        
        </Headerbox>
    )
}

export default Header