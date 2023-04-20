import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Button } from 'reusable-components/Button';
import { MdPlaylistAdd } from 'react-icons/md';
import { usePopup } from 'react-custom-popup';
import { tasks } from 'reducers/tasks';
import { Task } from './Task';
import { NewTaskContainer, TaskListContainer, TaskPageContainer } from './TasksStyling';
// import { FilterTasks } from './FilterTasks';

export const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.tasks);
  const projectToFilterOn = useSelector((store) => store.tasks.selectedProject)
  console.log(projectToFilterOn)
  const filterOn = useSelector((store) => store.tasks.filterOn);
  const ongoingTasks = allTasks.filter((item) => {
    console.log('item.value:', item.value)
    if (projectToFilterOn === 'all projects') {
      return item.completed === false
    } else {
      return item.completed === false && item.value === projectToFilterOn
    }
  });
  const completedTasks = allTasks.filter((item) => {
    if (projectToFilterOn === 'all projects') {
      return item.completed === true
    } else {
      return item.completed === true && item.value === projectToFilterOn
    }
  });

  const dispatch = useDispatch();
  const { showAlert, showInputDialog } = usePopup();
  const addNewTask = () => {
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
        }
      ],
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
        {projectToFilterOn === 'all projects' && filterOn === 'all'
       && allTasks.map((task, index) => (
         <Task key={task.id} index={index} task={task} completed={task.completed} />
       ))}
        {filterOn === 'all' && projectToFilterOn !== 'all projects'
       && allTasks.filter((item) => item.value.includes(projectToFilterOn)).map((task, index) => (
         <Task
           key={task.id}
           index={index}
           task={task}
           completed={task.completed}
           length={allTasks.length} />
       ))}
        {filterOn === 'ongoing' && ongoingTasks.map((task, index) => (
          <Task
            key={task.id}
            index={index}
            task={task}
            completed={task.completed}
            length={ongoingTasks.length} />
        ))}
        {filterOn === 'completed' && completedTasks.map((task, index) => (
          <Task key={task.id} index={index} task={task} length={completedTasks.length} />
        ))}
      </TaskListContainer>
      <NewTaskContainer><Button onClick={addNewTask}><MdPlaylistAdd fontSize="3em" color="#EA8FEA" /></Button>
      </NewTaskContainer>
    </TaskPageContainer>

  );
};
