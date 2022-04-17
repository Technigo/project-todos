import React from "react";
import { useSelector } from "react-redux";
import { TaskCounter, Header, Overview } from "../styled-components";

import TaskList from "components/TaskList";
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
                <TaskCounter>
                    {allTasks.length > 0
                        ? <h2>Completed {completedTasks.length} / {allTasks? allTasks.length : 0 }</h2>
                        : <h2>No current to dos!</h2>
                    }
                </TaskCounter>
            </Overview>
            <TaskList />
        </>
    )
}

export default StartPage;
