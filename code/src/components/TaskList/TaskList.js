import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import tasks from '../../reducers/tasks';
import './TaskList.css';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';

const TaskList = () => {
  /*The TaskList component fetches the list of tasks and maps over them.*/
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  /* Mark task as completed */
  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };
  /* Empty list state */
  if (items.length === 0) {
    return (
      <section className='empty-list-section'>
        <span className='emoji-span'>
          {/* Inline styling according to Material UI's documentation */}
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
            {/* Inline styling according to Material UI's documentation */}
            <Checkbox
              checked={item.isComplete}
              onChange={() => onToggleTask(item.id)}
			  {/* Color styling according to Material UI's documentation */}
              sx={{
                color: purple[400],
                '&.Mui-checked': {
                  color: purple[200],
                },
                position: 'relative',
                margin: '7px 3px',
              }}
            />
			{/* Display the user's input as a task on the list */}
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
