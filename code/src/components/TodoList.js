import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  return (
    <section>
      {items.map((item) => (
        <div className="flex-item">
          <div key={item.id}>
            <p>{item.text}</p>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />

            <ListItemIcon>
              {" "}
              <Button
                edge="end"
                aria-label="edit"
                onClick={() => onDeleteTodo(item.id)}
              >
                Delete
              </Button>
            </ListItemIcon>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
