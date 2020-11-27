import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import '../index.css';

import { BottomContainer, BottomButton } from '../styles/bottomStyles';
import { todos } from '../reducers/todos';

export const Bottom = () => {
  const allTasks = useSelector((store) => store.todos.tasks);
  const notDoneTasks = allTasks.filter(task => task.done === false);
  const dispatch = useDispatch();

  const onMarkAllDone = () => {
    dispatch(todos.actions.markAllDone())
  };

  const onClearDone = () => {
    dispatch(todos.actions.clearDoneTasks())
  };

  const onClearList = () => {
    swal({
      title: 'Are you sure?',
      text:'Do you want to delete all your todo\'s?',
      buttons: ['No, cancel!', 'Yes, delete!'],
      dangerMode: true,
      closeOnClickOutside: false,
      className:'alert-window'
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(todos.actions.clearList());
      }
    })
  };

  return(
    <BottomContainer>
      <BottomButton 
        onClick={onMarkAllDone}
        disabled={allTasks.length === 0 || notDoneTasks.length === 0 ? true : false}
      >Mark all as done
      </BottomButton>
      <BottomButton 
        onClick={onClearDone}
        disabled={allTasks.length === 0 ? true : false}
      >Remove done tasks
      </BottomButton>
      <BottomButton 
        onClick={onClearList}
        disabled={allTasks.length === 0 ? true : false}
      >Clear list
      </BottomButton>
    </BottomContainer>
  )
}