import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const tasks = useSelector((store) => store.tasks.items);
  const completedCount = tasks.filter((task) => task.complete === true).length;

  return (
    <div className="header">
      <div className="left-header">
        <h1>My</h1>
        <h1>Tasks</h1>
      </div>
      <div className="right-header">
        <h2>{tasks.length}</h2>
        <p className='count-paragraph'>tasks</p>
        <p className='count-percentage'>{((completedCount / tasks.length) * 100).toFixed(0)} % done</p>
      </div>
    </div>
  );
};

export default Header;
