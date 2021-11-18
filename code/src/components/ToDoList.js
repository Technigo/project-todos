import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ToDoList = () => {
    const allTodos = useSelector((state) => state.todos.items);

    const dispatch = useDispatch();

    return <div>{allTodos.map((item) => item.text)}</div>;
};

export default ToDoList;
