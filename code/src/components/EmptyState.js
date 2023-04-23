import React from 'react';

import HappyFace from '../assets/icons8-happy-85.png';

import './EmptyState.css';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <img alt="No tasks left" src={HappyFace} />
      <h1>No tasks left, lets celebrate!</h1>
      <p>... Or just add one above... I wont tell</p>
    </div>
  );
};

export default EmptyState;
