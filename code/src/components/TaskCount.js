import React from 'react';
import { connect } from 'react-redux';

const TaskCount = ({ taskCount, uncompletedTaskCount }) => {
  return (
    <div>
      <p>Total Tasks: {taskCount}</p>
      <p>Uncompleted Tasks: {uncompletedTaskCount}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const taskCount = state.tasks.todos.length;
  const uncompletedTaskCount = state.tasks.todos.filter((todo) => !todo.complete).length;
  return { taskCount, uncompletedTaskCount };
};

export default connect(mapStateToProps)(TaskCount);

// The mapStateToProps function maps the taskCount and
// uncompletedTaskCount properties from the Redux store state to the component's props.
// taskCount is the total number of tasks in the todos array,
// and uncompletedTaskCount is the number
// of tasks in the todos array that are not marked as complete.
// The TaskCount component displays the task count using two paragraphs. The first
// paragraph shows the total task count, and the second paragraph shows the count of
// uncompleted tasks.
// The connect function connects the TaskCount component to the Redux store,
// allowing it to access the taskCount and uncompletedTaskCount properties from the store.
