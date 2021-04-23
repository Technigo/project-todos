import React from 'react'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TopSection from './TopSection'

const Wrapper = () => {
    return (
        <section className="wrapper">
            <form className="content">
                <TopSection />
                <TodoForm />
                <TodoList />
            </form>
        </section>
    )
}

export default Wrapper