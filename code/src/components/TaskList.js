import React from 'react'
import Task from 'components/Input/Task'
import styled from 'styled-components'

const Wrapper = styled.main `
  width: 100%;
`;

const List = styled.ul `
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const TaskList = ({ tasks }) => {
console.log({ tasks })
  return (
    <Wrapper>
      <List>
        {tasks.map(task => (
        <Task 
          key={task.id}
          task={task} 
          />
      ))}
    </List>
    </Wrapper>
  )
}

export default TaskList