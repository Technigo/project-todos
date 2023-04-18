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
      title: 'Sign Up',
      showCloseButton: true,
      headerTextStyle: { fontWeight: 'bold', fontSize: 'x-large' },
      headerStyle: { marginTop: 5, marginBottom: 5 },
      errorMessageStyle: { color: 'green' },
      options: [
        {
          name: 'No Thanks!',
          type: 'cancel',
          style: { background: 'lightcoral' }
        },
        {
          name: 'Cancel',
          type: 'cancel'
        },
        {
          name: 'Confirm',
          type: 'confirm',
          style: { background: 'lightgreen' }
        }
      ],
      inputs: [
        {
          inputType: 'textarea',
          name: 'text',
          label: 'New Task',
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
        {allTasks.map((task) => (
          <Task key={task.id} task={task.text} />
        ))}
      </TaskListContainer>
      <NewTaskContainer><Button onClick={addNewTask}><MdPlaylistAdd fontSize="3em" color="#EA8FEA" /></Button></NewTaskContainer>
    </TaskPageContainer>

  );
};
