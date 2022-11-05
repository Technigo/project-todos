import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/todos/taskSlice';
import styled from 'styled-components';

const Footer = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const dispatch = useDispatch();
  const onRemoveAllTasks = () => { dispatch(tasks.actions.removeAllTasks(taskList)); };
  const onSetAllTasksDone = () => { dispatch(tasks.actions.setAllTasksDone(taskList)); };
  console.log('onSetAllTasksDone', onSetAllTasksDone)
  return (
    <FooterContainer>
      {taskList.length > 0 && (
        <FooterButton
          role="button"
          onClick={() => onRemoveAllTasks(taskList)}
          // onKeyDown={(e) => e.key === 'Enter' && onRemoveAllTasks()}>
          Delete
          project
          to-do
          list />
      )}
    </FooterContainer>
  )
};
export default Footer;

const FooterContainer = styled.footer`
border: solid 2px black`
const FooterButton = styled.footer`
border: solid 2px red
padding: 30px;`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `
/*    <button type="button" onClick={() => onRemoveAllTasks(taskList)}>Reset
</button><button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button></>)} */