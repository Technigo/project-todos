import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"


const Container = styled.div`
    width: 375px;
    margin: 0 auto;
`

const CounterArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #5c4d7d;
    border-radius: 10px;
    margin: 15px;
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