import React from "react";
import { useSelector } from "react-redux";

const ToDos = () => {
    const allTodos = useSelector(state => state.todos.items)
    return <div>{allTodos.map((item) => item.text)}</div>
}

export default ToDos