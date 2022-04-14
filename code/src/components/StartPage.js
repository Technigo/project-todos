import React from "react";
import { useSelector } from "react-redux";
import TaskList from "components/TaskList";
import { useNavigate } from 'react-router-dom';
import { NewTaskButton, TaskCounter, Header } from "../styled-components";

const StartPage = () => {
    const allTasks = useSelector((backpack) => backpack.tasks.items);    
    const completedTasks = allTasks.filter(task => task.isDone)

    const navigate = useNavigate();

    return (
        <>
            <Header>
				<h1>To do: </h1>
                <NewTaskButton onClick={() => navigate("/addtask")}>
                    add new task
                </NewTaskButton>
            </Header>
            {allTasks.length > 0
                ? <TaskCounter>
                        <p>Completed {completedTasks.length} / {allTasks? allTasks.length : 0 } todos</p>
                        {/* <p>number of tasks: {allTasks.length}</p>
                        <p>uncompleted tasks : {allTasks.length - completedTasks.length}</p>
                        <p>completed tasks : {completedTasks.length}</p> */}
                    </TaskCounter>
                : <p>No current todos!</p>
            }
            <TaskList />
        </>
    )
}

export default StartPage;
