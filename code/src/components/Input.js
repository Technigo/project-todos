import React from 'react'
import { useDispatch } from 'react-redux'

const Input = () => {
    
    /* const dispatch = useDispatch() */

    return (
      <>
      <div className='fillout-div'></div>
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
              placeholder='Set auto reply on job email...'
            />
          </label>
          <button
            type='button'
            className='button'
            /* onClick={() => dispatch()} */>
            Add to planner
          </button>
        </form>
        </>
    )
}

export default Input