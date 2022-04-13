import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CompletedTasks from 'components/CompletedTasks'
import AllTasks from 'components/AllTasks'
import styled from 'styled-components'
import taskList from 'reducers/tasks'
import AddTask from './AddTask'
import Footer from './Footer'
import IncompleteTasks from './IncompleteTasks'


//styled components
const devices = {
mobile: "(min-width: 375px)",
tablet: "(min-width: 768px)",
desktop: "(min-width: 1025px)",
}

const Container = styled.div `
width: 375px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

@media ${devices.tablet} {
    width: 768px;
}

@media ${devices.desktop} {
    width: 1025px;
}
`

const Nav = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Button = styled.button`
border-radius: 8px;
border: 0.4px solid gray;
padding: 4px;
`
const BigHeading = styled.h1`
color: #1D3F6F;
font-size: 28px;
`

const Emoji = styled.span`
font-size: 10px;
`

const StartPage = () => {

    const tasksList = useSelector((todos) => todos.tasks.items)
    const dispatch = useDispatch()


    const onTaskToggle = (taskId) => {
        dispatch(taskList.actions.toggleItem(taskId))
    }

    const onDeleteClick = (index) => {
        dispatch(taskList.actions.deleteItem(index))
    }

    return (
        <section>
            <Container>

        <img src="./assets/woman-long-list.jpg" alt="illustration created by storyset, www.freepik.com" width="150px"/>
            <BigHeading>Get it out of your head</BigHeading> 

            <AddTask />
        
        <Nav>
        <AllTasks />
        <CompletedTasks />
        <IncompleteTasks />

        </Nav>
            
    
            {tasksList.map((taskItem, taskIndex) => (

                <article>
                    <h2>{taskItem.name}</h2>
                    
                    <label>
                    <h2>{taskItem.text}</h2>
                    <input 
                    type="checkbox" 
                    checked={taskItem.isDone} 
                    onChange={() => onTaskToggle(taskItem.id)} />
                    Check!    &nbsp;
                    </label>

                    <Button onClick={() => onDeleteClick(taskIndex)} >
                    <Emoji role="img" aria-label="cross">❌</Emoji> 
                    </Button>
                  
                </article>

            ))}
            </Container>
            <Footer />
            </section>

    )

}

export default StartPage