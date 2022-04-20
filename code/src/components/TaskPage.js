import React, { useState } from "react"
import styled from "styled-components"

import Header from "./Header"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import Footer from "./Footer"

const StyledTaskPage = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    Footer {
        margin-top: auto;
    }
`

const ContentWrapper = styled.section`
    width: 375px;
    margin: 0 auto;

    @media screen and (min-width: 668px) {
        width: 600px;
    }

    @media screen and (min-width: 1024px) {
        width: 800px;
    }
`

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
