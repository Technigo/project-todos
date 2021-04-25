import React from 'react'
import { useSelector } from 'react-redux'
import '../css/TodoContainer.css'

import TodoHeader from './TodoHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoStartPage from './TodoStartPage'
import TodoNavbar from './TodoNavbar'

const TodoContainer = () => {
    const totalCountTodo = useSelector((store) => store.todos.items.length) 

    return(
        <main className="container">
            <section className="todo-wrapper">
                <TodoNavbar />
                <TodoHeader />
                <TodoForm />
                {totalCountTodo === 0 ? <TodoStartPage /> : <TodoList />}
            </section>
            <footer className="footer-wrapper">
                <p>Anna Lindgren - Technigo Bootcamp 2021</p>
                <p>Icons made by 
                    <a href="https://www.freepik.com" title="Freepik"> Freepik</a> from
                    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </p>
            </footer>
        </main>
    )
}

export default TodoContainer