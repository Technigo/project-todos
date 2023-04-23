import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import swal from 'sweetalert';

const TaskCountDiv = styled.div`
padding-right: 20px;
padding-bottom: 10px;
`

const TaskCount = () => {
  const todoList = useSelector((store) => store.todolist.items);
  const uncompletedTasks = todoList.filter((singletask) => !singletask.isChecked);
  const completedTasks = todoList.filter((singletask) => singletask.isChecked);

  useEffect(() => {
    if (uncompletedTasks.length === 0 && completedTasks.length > 0) {
      swal({
        icon: 'success',
        title: 'Great job!',
        text: 'You completed all your tasks!',
        button: 'OK'
      });
    }
  });

  return (
    <TaskCountDiv>
      <p>tasks completed: {todoList.length - uncompletedTasks.length}/{todoList.length}</p>
    </TaskCountDiv>
  )
}

export default TaskCount;