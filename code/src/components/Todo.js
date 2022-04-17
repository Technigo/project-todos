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
                    //toggle completed här eller?
                })
            )
        }
        setValue('');
    }

  return (
    <div style={{backgroundColor: 'blue', padding: '30px'}}>
      <h1 style={{color: 'orange', textAlign: 'center'}}>Reminders</h1>
        <TodoItem />
        <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
            <input
                type="text"
                placeholder="New reminder"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <button onClick={onSubmit} style={{color: 'orange', fontWeight: 'bold'}}>
                Add task
            </button>
        </div>
    </div>
  )
}
