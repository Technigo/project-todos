import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const TodoCounterText = styled.section`
  background: linear-gradient(0.25turn, #EED6C4, linen);
  font-family: 'Quicksand', sans-serif;
  border: 4px solid linen;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 20px;
`

const Status = styled.h3`
  font-size: 24px;   
  text-transform: uppercase;
  font-weight: bold;
  color: #6B4F4F;
  letter-spacing: 2px;
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

const TodoCounter = () => {
    const allTodos = useSelector((store) => store.todos.items)
    const remainingTodos = allTodos.filter((todo) => todo.isDone === true)

    if (allTodos.length > 0) {
        return (
            <TodoCounterText>
                <Status>Status</Status>
                <p>
                  <ArrowEmoji 
                    role="img" 
                    aria-label="arrow emoji">➡
                  </ArrowEmoji> 
                  You have <CounterNumbers>{allTodos.length}</CounterNumbers> tasks on your to do-list.
                </p>
                <p>
                  <ArrowEmoji 
                    role="img" 
                    aria-label="arrow emoji">➡
                  </ArrowEmoji> 
                  Currently <CounterNumbers>{remainingTodos.length}</CounterNumbers> of them are completed.
                </p>
            </TodoCounterText>
        )
    } else if (remainingTodos.length === 0) {
        return (
            <TodoCounterText>
                <p>You don't have any added tasks yet!</p>
                <p>Please go ahead and add one :)</p>
            </TodoCounterText>
        )
    } 
}

export default TodoCounter 