import React from 'react'
import styled from 'styled-components'
import AddTasks from 'components/AddTasks'
import TaskList from 'components/TaskList'
import Header from 'components/Header'
import Footer from 'components/Footer'
import TaskCounter from './Counter'

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  }

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.desktop}{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
    }
`

const Main = () => {
    return (
    <main>
        <Header />
        <Wrapper>
            <AddTasks />
            <TaskCounter />
        </Wrapper>
        <TaskList />
        <Footer />
    </main>
    )
}

export default Main