import React from 'react'
/* import { useDispatch } from 'react-redux' */

const Input = () => {
    
    /* const dispatch = useDispatch() */

    return (
        <form className='input-container'>
          <label
            htmlFor='task'
            className='task-label'
            >
            <input
              type='text'
              id='task'
              name='task'
              className='task'
              minLength='4'
              maxLength='140'
              placeholder='+ Add task'
            />
          </label>
        </form>
    )
}

export default Input