import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosAdd } from "react-icons/io";

import todos from "../reducers/todos";
import { TaskForm, AddTaskInput, SendButton } from "../styled/StyledComponent";

const AddTask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const sendNewTask = () => {
    if (text.length > 2) {
      dispatch(todos.actions.addTask(text));
      setText("");
    }
  };

  return (
    <TaskForm>
      <AddTaskInput
        type="text"
        name="name"
        placeholder=" Add Task"
        onChange={handleOnChange}
        value={text}
      />
      <SendButton onClick={sendNewTask}>
        <IoIosAdd size={30} color="#8b8b8b" />
      </SendButton>
    </TaskForm>
  );
};
export default AddTask;
