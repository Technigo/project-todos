import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import FlipMove from "react-flip-move";

import todos from "../reducers/todos";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const items = useSelector((store) => store.todos.items);
  const completedTodos = items.filter((todo) => todo.isComplete);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div>
        <h1 className="header-title">To-do's</h1>
      </div>

      <div className="btn-box">
        {visible ? (
          <button
            className="header-btn"
            onClick={() =>
              dispatch(todos.actions.youAreAlldone(), setVisible())
            }
          >
            I am all done!
          </button>
        ) : (
          <>
            <button
              className="header-btn"
              onClick={() => dispatch(todos.actions.removeComplete())}
            >
              Make a new list!
            </button>
            <button
              className="header-btn"
              onClick={() => dispatch(todos.actions.resetAll())}
            >
              Regret your done
            </button>
          </>
        )}
        <div>{items.length} / tasks </div>
      </div>
    </header>
  );
};

export default Header;
