import React from 'react';
import { todos } from "reducers/todos";

const EditTodo = () => {
  const { id } = useParams();
  const todo = useSelector(store =>
    store.todos.items.find(item => item.id === id)
  );

  dispatch(
    todos.actions.updateItem({
      id,
      category: userCategory,
      title: todoTitle,
      content: todoContent,
      createdAt: Date.now(),
    })
  );
  history.push("/");
};

export default EditTodo;