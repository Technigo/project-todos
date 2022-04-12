import React from 'react'
import { useSelector } from 'react-redux'
import ToDoListItem from './ToDoListItem'
// import todos from 'reducers/todos'

const ToDoList = () => {
    const toDoList = useSelector((store) => store.todos)

    return (
        <section>
            {toDoList.map((toDoItem) => (
                <ToDoListItem 
                  key={toDoItem.id}
                  id={toDoItem.id}
                  text={toDoItem.text}
                  isComplete={toDoItem.complete}>
                </ToDoListItem>
            ))}
        </section>
    )
}

export default ToDoList