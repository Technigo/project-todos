import React from 'react'
import { useSelector } from 'react-redux'
import { AddTask } from 'components/AddTask'
import 'components/TaskList.css'


export const TaskList = () => {
    const allTasks = useSelector((store) => store.tasks)

    console.log(allTasks)

    // TODO - Add on new tasks from AddTask





    return (
        <div>
            <section>
                <ul className="add-task-ul">
                    <AddTask />
                </ul>
            </section>

            {allTasks.tasks.map((task) => (
                <section className="checkbox-container">
                    <ul key={task.id} >{task.text}</ul>
                    <input type="checkbox" id="checkbox"
                    // checked
                    >
                    </input>
                </section>

            ))}


        </div>
    )
}