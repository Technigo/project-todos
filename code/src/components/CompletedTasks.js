import React from "react";
import { useSelector, useDispatch } from "react-redux"

import Header from 'components/Header'
import Footer from 'components/Footer'

const CompletedTasks = () => {
    const allTasks = useSelector((store) => store.tasks.items)

    const dispatch = useDispatch()

    // const onItemToggle = (taskId) => {
    //     dispatch(tasks.actions.toggleItem(taskId))
    // }


    return (
        <main>
            <Header />
                <section>
            <div>
            {allTasks.map(taskItem => (
                <article key={taskItem.id}>
                    <h3>{taskItem.text}</h3>
                    <label> Completed:
                        <input type="checkbox" 
                        checked={taskItem.complete} 
                        // onChange={() => onItemToggle(taskItem.id)}
                        />
                    </label>
                    <button type="button">                      
                     {/* onClick={() =>onButtonClick(taskItem.id)} */}
                        <span role="img" aria-label="cross">❌
                        </span></button>
                </article>
            ))}
            </div>
        </section>
            <Footer />
        </main>
    )
}

export default CompletedTasks