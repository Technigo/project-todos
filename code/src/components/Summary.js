import React from 'react';

import './summary.css';
// number of active todos, if no todos "YAY you are free"
// counter of done tasks
export const Summary = () => {
  return (
    <section className="summary-wrapper">
      <h2>12</h2>
      <h3>tasks for today</h3>
      <p>2 tasks done</p>
    </section>
  );
};

export default Summary;
