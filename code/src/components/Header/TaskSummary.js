import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.aside`
    max-width: 33%;
    border: 1px solid green;
`;

const TaskSummary = () => {

  const tasks = useSelector(state => state.tasks).length
  const completed = useSelector((state) => state.tasks.filter((item) => item.completed)).length
  const active = useSelector((state) => state.tasks.filter((item) => !item.completed)).length

  return(
    <Wrapper>
    { tasks > 0 &&
      <div>
        <div>Du har {tasks} uppgifter idag.</div>
        <div>{completed} är avklarade och du har {active} kvar</div>
      </div>
    }
    </Wrapper>
    
  )
}

export default TaskSummary