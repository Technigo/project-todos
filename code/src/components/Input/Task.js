import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete } from '../../reducers/TasksSlice' 
import styled from 'styled-components'

const mapDispatch = { toggleComplete }

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 50px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow:
        3px 3px 6px 3px rgba(0, 0, 0, 0.1),
        -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
        3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
        -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
`;

const Checkbox = styled.input`
  appearance: none;
  background: linear-gradient(135deg, rgba(247, 251, 255, 0.7) 20%, rgba(0, 0, 0, 0.125) 100%);
  border: 2px solid ${props => props.theme.colors.background};
  border-radius: 16px;
  box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.1), -3px -3px 5px 1px rgba(247, 251, 255, 0.5);
  cursor: pointer;
  height: 32px;
  margin: 0 16px;
  width: 32px;
  outline: none;

    &:checked {
      background: linear-gradient(-45deg, rgba(247, 251, 255, 0.4) 20%, rgba(0, 0, 0, 0.2) 100%);
      border: 3px solid lighten(hsl(210, 50%, 90%), 2);
      box-shadow:
        3px 3px 6px 3px rgba(0, 0, 0, 0),
        -3px -3px 3px 3px rgba(247, 251, 255, 0),
        3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
        -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
      color: #7989A4;
      text-stroke: 1px transparent;
      linear-gradient: (-45deg, rgba(247, 251, 255, 0.4) 20%, rgba(0, 0, 0, 0.2) 100%); 
    }
`;

const Task = ({ task, toggleComplete }) => {
  return (
    <Wrapper>
      <Checkbox 
        type="checkbox" 
        value={task.completed} 
        checked={task.completed ? true : false }
        onChange={() => toggleComplete(task.id)} />{task.text}
    </Wrapper>
  ) 
}

export default connect(
  null,
  mapDispatch
)(Task)