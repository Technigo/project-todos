import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TaskList = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();


  return (
    <section className="wrapper">
      <h2>My To Do app </h2>
      {/* <div>
          <input
          className="checkbox"
          type='checkbox'
      
          />
        </div> */}
      <button>Add</button>
    </section>
  );
};
export default TaskList;
