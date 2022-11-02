/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
import uniqid from 'uniqid'

export const AddToDo = () => {
  const dispatch = useDispatch()
  const [newToDo, setNewToDo] = useState('');
  // const [loading, setLoading] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const postNewToDo = { id: uniqid(),
      name: newToDo,
      complete: false }

    dispatch(ToDo.actions.addToDo(postNewToDo))
    setNewToDo(' ')
    // setLoading(false)
  }

  // if (loading) {
  //   return (
  //     <p>The page is loading</p>
  //   )
  // }

  return (
    <form onSubmit={onFormSubmit}>
      <h2>Add ToDo</h2>
      <Text
        className="TextArea"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)} />
      {/* <label>
        <select
          className="dropdown"
          onChange={handleChickenjokeChange}
          value={chickenjoke}>
          <option value="Select answer">Select answer:</option>
          <option value="It thought it was an egg-cellent idea">It thought it was an egg-cellent idea</option>
          <option value="Just beak-cause he could">Just beak-cause he could</option>
          <option value="To avoid this joke">To avoid this joke</option>
        </select>
      </label> */}
      <button className="Submit" type="submit"> Add ToDo </button>
    </form>
  )
}

const Text = styled.textarea` 
  width: auto;
  margin: 15px;
  height:  200px;
  padding: 20px;
  border: solid rgb(108, 106, 106) 2px;
  background-color: rgb(235, 232, 232);
  box-shadow:  5px 10px #272727;
`

