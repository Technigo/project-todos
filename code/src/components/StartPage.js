import React from "react";
import { useSelector } from "react-redux";
import TaskList from "components/TaskList";
import { TaskCounter, Header, Overview } from "../styled-components";

import AddTask from "./AddTask";

const StartPage = () => {
    const allTasks = useSelector((backpack) => backpack.tasks.items);    
    const completedTasks = allTasks.filter(task => task.isDone)

    return (
        <>
            <Header>
				<h1>To do: </h1>
            </Header>
            <AddTask/>
            <Overview>
                {allTasks.length > 0
                    ? <TaskCounter>
                            <p>Completed {completedTasks.length} / {allTasks? allTasks.length : 0 }</p>
                            
                        </TaskCounter>
                    : <TaskCounter><p>No current to dos!</p></TaskCounter>
                }
            </Overview>
            <TaskList />
        </>
    )
}

export default StartPage;
