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

const HeaderImage = styled.img`
width: 170px;
margin-top: 25px;
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
display: flex;
position: absolute;
right: 13px;
top: 15px;
`
const BigHeading = styled.h1`
color: #1D3F6F;
font-size: 28px;
`

const Emoji = styled.span`
font-size: 10px;
`

const Article = styled.article`
border: 0.4px solid gray;
background: #f8f8f8;
border-radius: 15px;
padding: 1rem;
margin: 0.4rem;
width: 83%;
position: relative;
word-break: break-word;
`

const TaskHeading = styled.h2`
margin-block-start: -18px;
font-size: 20px;
max-width: 70%;
overflow-wrap: break-word;
padding-bottom: 6px;
`

const NewTaskHeading = styled.h2`
margin-block-start: -2px;
font-size: 20px;
max-width: 85%;
overflow-wrap: break-word;
`

const Checkbox = styled.input`
margin-top: 10px;
vertical-align: bottom;
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

        <HeaderImage src="./assets/woman-long-list.jpg" alt="illustration created by storyset, www.freepik.com" width="150px" />

            <BigHeading>Get it out of your head</BigHeading> 

            <AddTask />
        
        <Nav>
        <AllTasks />
        <CompletedTasks />
        <IncompleteTasks />

        </Nav>
            
    
            {tasksList.map((taskItem, taskIndex) => (

                <Article>
                    <Button onClick={() => onDeleteClick(taskIndex)} >
                        <Emoji>
                    <span role="img" aria-label="cross">❌</span></Emoji> 
                    </Button>
                    <NewTaskHeading>{taskItem.name}</NewTaskHeading>
                    
                    <label>
                    <TaskHeading>{taskItem.text}</TaskHeading>

                    <Checkbox 
                    type="checkbox" 
                    checked={taskItem.isDone} 
                    onChange={() => onTaskToggle(taskItem.id)} />
                     &nbsp; I'm done with this
                    </label>
                  
                </Article>

            ))}
            </Container>
            <Footer />
            </section>

    )

}

export default StartPage