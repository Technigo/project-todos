import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CompleteMessage = () => {
  const todos = useSelector((store) => store.todolist.list)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const hasInComplete = todos.find((item) => item.isCompleted === false)
    setIsCompleted(!hasInComplete)
  }, [todos])

  return (
    isCompleted &&
    <Message>
      Good job! You have completed all the tasks today. It's time to celebrate! <span role="img" aria-label="happyface">🎉🎉🥳🥳</span>
    </Message>
   )
}
 
export default CompleteMessage

const Message = styled.div`
  color: #ffb703;
  font-size: 22px;   
  margin-top: 50px;
  text-align: center
`

