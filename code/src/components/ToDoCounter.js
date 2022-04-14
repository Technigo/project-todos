import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const TodoCounterContainer = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const TodoCounterText = styled.div`
  background: linear-gradient(0.25turn, #EED6C4, linen);
  font-family: 'Quicksand', sans-serif;
  border: 4px solid linen;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 8px;
  @media (min-width: 768px) {
    width: 508px;
    height: 200px;
  }
`

const Status = styled.h3`
  font-size: 24px;   
  text-transform: uppercase;
  font-weight: bold;
  color: #6B4F4F;
  letter-spacing: 2px;
  padding-left: 16px;
`

const StatusText = styled.p`
  @media (min-width: 768px) {
    text-align: center;
  }
`

const ArrowEmoji = styled.span`
  font-size: 20px;
  padding-right: 12px;
`

const CounterNumbers = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: darkslateblue;
  border: 2px solid white;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 4px;
  background: #DDBEBE;
`

const WhenEmptyList = styled.p`
  text-align: center;
  font-size: 18px;
  padding-top: 18px;
`

const NoTodosTitle = styled.span`
  font-weight: bold;
`

const NoTodosText = styled.p`
  text-align: center;
  letter-spacing: 1px;
  line-height: 40px;
`

const ToDoCounter = () => {
    const allTodos = useSelector((store) => store.todos.items)
    const remainingTodos = allTodos.filter((todo) => todo.isDone === true)

    if (allTodos.length > 0) {
        return (
          <TodoCounterContainer>
            <TodoCounterText>
                <Status>Status</Status>
                <StatusText>
                  <ArrowEmoji 
                    role="img" 
                    aria-label="arrow emoji">➡
                  </ArrowEmoji> 
                  You have <CounterNumbers>{allTodos.length}</CounterNumbers> tasks on your to do-list.
                </StatusText>
                <StatusText>
                  <ArrowEmoji 
                    role="img" 
                    aria-label="arrow emoji">➡
                  </ArrowEmoji> 
                  Currently <CounterNumbers>{remainingTodos.length}</CounterNumbers> of them are completed.
                </StatusText>
            </TodoCounterText>
          </TodoCounterContainer>
        )
    } else if (remainingTodos.length === 0) {
        return (
          <TodoCounterContainer>
            <TodoCounterText>
              <WhenEmptyList>
                <NoTodosTitle>You have no todo's! </NoTodosTitle> 
                  <span role="img" aria-label="party emoji">🥳</span> 
                  &nbsp;Sit back - relax - have a coffee.&nbsp; 
                  <span role="img" aria-label="coffee emoji">☕️</span>
              </WhenEmptyList>
              <NoTodosText>But maybe you ran out of coffee filters..?<br></br>
              Add that or something else to your todo list!</NoTodosText>
            </TodoCounterText>
          </TodoCounterContainer>
        )
    } 
}

export default ToDoCounter 