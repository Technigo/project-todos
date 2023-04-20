import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/todos';
import JSConfetti from 'js-confetti';
import TodoItem from './TodoItem';
import allDone from './images/Alldone.png';
import './css/todoItem.css';

export const ToDoLists = () => {
  const dispatch = useDispatch();

  // gets the tasks from the store
  const taskList = useSelector((store) => store.tasks.items);

  // confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // keep track of whether any tasks have been added
  const [hasTasks, setHasTasks] = useState(false);

  // keep track of whether the "All Done" button has been clicked
  const [allDoneClicked, setAllDoneClicked] = useState(false);

  // function to set checkbox as complete or not, from todo reducer
  const onDone = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDelete = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex));
  };

  const todosTodo = taskList.filter((todo) => !todo.isDone);
  const doneTodos = taskList.filter((todo) => todo.isDone);

  useEffect(() => {
    if (doneTodos.length === taskList.length && taskList.length > 0) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [doneTodos.length, taskList.length]);

  useEffect(() => {
    if (showConfetti) {
      const JsConfetti = new JSConfetti();
      JsConfetti.addConfetti();
    }
  }, [showConfetti]);

  useEffect(() => {
    if (taskList.length > 0) {
      setHasTasks(true);
    } else {
      setHasTasks(false);
    }
  }, [taskList]);

  const onClearAll = () => {
    dispatch(tasks.actions.deleteAll());
    dispatch(tasks.actions.deleteAllDone());
    setAllDoneClicked(true);
  };

  return (
    <div>
      {hasTasks && (
        <>
          <h2>To-do ({todosTodo.length})</h2>

          {todosTodo.length === 0 && !allDoneClicked && (
            <h3> Viva! You are all done! 🎉 </h3>
          )}

          {todosTodo.map((todo, index) => (
            <TodoItem
              todo={todo}
              index={index}
              key={todo.id}
              onDelete={onDelete}
              onDone={onDone} />
          ))}

          <h2>Done ({doneTodos.length})</h2>

          {doneTodos.map((todo, index) => (
            <TodoItem
              todo={todo}
              index={index}
              key={todo.id}
              onDelete={onDelete}
              onDone={onDone} />
          ))}
        </>
      )}
      <button type="button" onClick={onClearAll} className="AllDone">
        <img src={allDone} alt="All done" />
      </button>
      {!hasTasks && allDoneClicked && (
        <div>
          <h2>
            🐳 Whale done!!!!! Looks like there&apos;s no more to do.
          </h2>
        </div>
      )}
    </div>
  );
};
