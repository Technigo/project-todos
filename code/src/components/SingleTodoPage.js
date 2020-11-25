import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { todos } from 'reducers/todos'

export const SingleTodoPage = () => {

    const { id } = useParams();
   const todo = useSelector(store => 
        store.todos.items.find(item => item.id === parseInt(id))
        );
    

    if (!todo) {
        return (
            <section>
                <h2>Todo not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="todo">
                <h2>{todo.name}hej</h2>
                <p className="todo-content">{todo.content}</p>
            </article>
        </section>
    )
}