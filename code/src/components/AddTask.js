import React, { useState } from 'react'


export const AddTask = () => {
  //state for input from the text boc
  const [inputValue, setInputValue] = useState('')


  //det som händer när formet skickas
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)

    //dispatch komemr her

    //den här gör textfältet tomt
    setInputValue('')
  }

  return (
    <form
      onSubmit={handleOnSubmit}>
      <input
        type='text'
        //FATTAR INTE DETTA
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      >
      </input>
      <input
        type='submit'
        value='Add task'>
      </input>
    </form>
  )
}
