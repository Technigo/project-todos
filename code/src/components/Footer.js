import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/todos/taskSlice';
import styled from 'styled-components';

const Footer = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const dispatch = useDispatch();
  const onRemoveAllTasks = () => { dispatch(tasks.actions.removeAllTasks(taskList)); };
  const onSetAllTasksDone = () => { dispatch(tasks.actions.setAllTasksDone(taskList)); };
  return (
    <FooterContainer>
      <button type="button" onClick={() => onRemoveAllTasks(taskList)}>Reset</button>
      <button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button>
    </FooterContainer>
  )
};
export default Footer;

const FooterContainer = styled.footer`
border: solid 2px black`