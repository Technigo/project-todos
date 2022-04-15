import React from "react";
import { useSelector} from "react-redux";
import todos from "reducers/todos";


const ToDoStatus = () => {

    const todoList = useSelector((store) => store.todos.items);
    const todoLeft = todoList.filter((todos) => todos.isComplete === true)

if (todoList.length > 0 && todoList.length === 1) {
    return (
        <section>Amount left to do
        </section>
    )
}

else if (todoList.length > 1) {
    return (
        <section>xxx
        </section>
    )
}

else if (todoList.length === 0) {
    return (
        <section>aaa
        </section>
    )
}


}

export default ToDoStatus;