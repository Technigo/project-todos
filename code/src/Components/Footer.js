// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import { useDispatch } from 'react-redux';
import { Tasks } from 'Reducers/Tasks';
import { Counter } from './Counter';
import './Footer.css';

// /////////////// COMPONENT //////////////////////// //

export const Footer = () => {
  const dispatch = useDispatch();

  const clearTasks = () => {
    dispatch(Tasks.actions.clearAll());
  }

  // /////////////// OUTCOME //////////////////////// //

  return (
    <section className="footer-container">
      <div className="footer-content">
        <button type="button" onClick={clearTasks}><img className="clearall-button" alt="trashbin" src="../Images/clearall.png" /></button>
      </div>
      <Counter />
    </section>
  )
}
