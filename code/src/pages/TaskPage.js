import React, { useState } from "react"

import Header from "../components/Header"
import AddTask from "../components/AddTask"
import TaskList from "../components/TaskList"
import Footer from "../components/Footer"
import { StyledTaskPage, ContentWrapper } from "styles/StylesForPages"


const TaskPage = () => {
    const [allTasks, setAllTasks] = useState(true)
    const [uncompletedTasks, setUncompletedTasks] = useState(false)
    const [completedTasks, setCompletedTasks] = useState(false)

    return (
        <StyledTaskPage>
            <ContentWrapper>
                <Header
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                uncompletedTasks={uncompletedTasks}
                setUncompletedTasks={setUncompletedTasks}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
                />
                <AddTask />
                <TaskList
                allTasks={allTasks}
                uncompletedTasks={uncompletedTasks}
                completedTasks={completedTasks}
                />
                <Footer />
            </ContentWrapper>
        </StyledTaskPage>
    )
}

export default TaskPage
