import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";
import "./HeaderStyle.css";

const Header = () => {
  const items = useSelector((store) => store.todos.items.length);
  const dispatch = useDispatch();

  return (
    <div className="header-container">
      <div className="header-section">
        <div className="header-section-content">
          <p>{items} Todo</p>
          <button
            className="header-button"
            onClick={() => {
              dispatch(todos.actions.removeAllItems());
            }}
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
