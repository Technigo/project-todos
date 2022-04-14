import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"


const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  }

const Container = styled.div`
    width: 375px;
    margin: 0 auto;
`

const CounterArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #4C4EF9;
    border-radius: 10px;
    margin: 15px 9.5px 50px 9.5px;
    color: white;
    background-color:#4C4EF9;

    @media ${devices.desktop}{
        margin: 15px 9.5px 25px 9.5px
    }
`

const TaskCounter = () => {
    const allTasks = useSelector((store) => store.tasks.items)
    const remainingTasks = allTasks.filter((task) => task.complete === false)

    if (allTasks.length > 0) {
        return (
            <section>
                <Container>
                    <CounterArticle>
                        <p>
                        Total: {allTasks.length}
                        </p>
                        <p> 
                        Tasks left to do: {remainingTasks.length}
                        </p>
                    </CounterArticle>
                </Container>
            </section>
            
        )
    } else if (remainingTasks.length === 0) {
        return (
            <section>
                <Container>
                    <CounterArticle>
                        <p>You are all done!</p>
                    </CounterArticle>
                </Container>
            </section>
        )
    } 
}

export default TaskCounter 