import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from 'reducers/tasks'

import { TodoItem } from './TodoItem'

//ändra till export default längst ner, ta då bort {} vid import
export const Todo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            console.log('write something first');
        } else {
            dispatch(
                addTask({
                    task: value
                })
            )
        }
        setValue('');
    }

  return (
    <div style={{backgroundColor: 'blue', padding: '30px'}}>
      Container displaying todo items
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
	  ></input>
        <TodoItem />
        <button onClick={onSubmit}>
        Add task
        </button>
    </div>
  )
}
