import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Button } from 'reusable-components/Button';
import { MdPlaylistAdd } from 'react-icons/md';
import { usePopup } from 'react-custom-popup';
import { tasks } from 'reducers/tasks';
import { Task } from './Task';
import { NewTaskContainer, TaskListContainer, TaskPageContainer } from './TasksStyling';

export const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();
  console.log(allTasks)
  const { showAlert, showInputDialog } = usePopup();
  const addNewTask = () => {
    console.log('task')
    showInputDialog({
      title: 'Create new task',
      showCloseButton: true,
      headerTextStyle: { fontWeight: 'bold', fontSize: 'x-large' },
      headerStyle: { marginTop: 5, marginBottom: 5 },
      errorMessageStyle: { color: 'green' },
      options: [
        {
          name: 'Cancel',
          type: 'cancel',
          style: { background: '#FFAACF' }
        },
        {
          name: 'Confirm',
          type: 'confirm',
          style: { background: '#B9F3E4' }
        }
      ],
      inputs: [
        {
          inputType: 'textarea',
          name: 'text',
          label: 'Text',
          default: '',
          validation: {
            minLength: {
              value: 5
            }
          }
        },
        {
          inputType: 'date',
          name: 'due',
          label: 'Due date',
          validation: {
            required: { value: true, message: 'Value is required' }
          }
        }],
      onConfirm: (response) => {
        showAlert({ title: 'Result', text: JSON.stringify(response) });
        console.log(response.text)
        console.log(JSON.stringify(response.due))
        dispatch(tasks.actions.addItem({ response }))
      }
    })
  }

  return (

    <TaskPageContainer>
      <TaskListContainer>
        {allTasks.map((task, index) => (
          <Task key={task.id} index={index} task={task} />
        ))}
      </TaskListContainer>
      <NewTaskContainer><Button onClick={addNewTask}><MdPlaylistAdd fontSize="3em" color="#EA8FEA" /></Button></NewTaskContainer>
    </TaskPageContainer>

  );
};
