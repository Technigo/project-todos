import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
width: 250px;
border: 2px solid blue;
margin: 10px;
padding: 20px 0;
`

const TaskCreator = () => {
  return (
    <Form>
      <input
        type="text"
        id="taskInput"
        placeholder="+ Add task"
      />
    </Form>

  )
};

export default TaskCreator;

//add ARIA-tag to inputform since no label?