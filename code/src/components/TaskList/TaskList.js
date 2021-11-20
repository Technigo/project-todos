import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import tasks from '../../reducers/tasks';
import './TaskList.css';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';

const TaskList = () => {
  /*The TaskList component uses useSelector to fetch the list of tasks and map over them.*/
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  if (items.length === 0) {
    return (
      <section className='empty-list-section'>
        <span className='emoji-span'>
          <EmojiEmotionsIcon fontSize='large' style={{ color: 'grey' }} />
        </span>
        <p>What's the weirdest thing you'll do today?</p>
      </section>
    );
  } else {
    return (
      <section className='list-section'>
        {items.map((item) => (
          <div className='task-container' key={item.id}>
            <Checkbox
              checked={item.isComplete}
              onChange={() => onToggleTask(item.id)}
              sx={{
                color: purple[400],
                '&.Mui-checked': {
                  color: purple[200],
                },
                position: 'relative',
                margin: '7px 3px',
              }}
            />

            <p className='task-text'>{item.text}</p>

            <button
              className='delete-button'
              onClick={() => onDeleteTask(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </section>
    );
  }
};

export default TaskList;
