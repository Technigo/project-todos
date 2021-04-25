import React from "react";
import { useSelector } from "react-redux";
import Moment from 'react-moment';

const Header = () => {
  const tasks = useSelector((store) => store.tasks.items);
  const completedCount = tasks.filter((task) => task.complete === true).length;
  const date = new Date()

  return (
    <div className="header">
      <div className="left-header">
        <h1>My</h1>
        <h1>Tasks</h1>
        <Moment format="MMMM DD, YYYY" className='date'>{date}</Moment>
      </div>
      <div className="right-header">
        <h2>{tasks.length}</h2>
        <p className='count-paragraph'>tasks</p>
        {tasks.length === 0 ? <p className='count-percentage'>0 % done</p> : <p className='count-percentage'>{((completedCount / tasks.length) * 100).toFixed(0)} % done</p>}
      </div>
    </div>
  );
};

export default Header;
