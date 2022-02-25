import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import todos from "reducers/todos";

const ListItems = styled.div`
  width: 300px;

  div {
    background-color: ${(props) => props.theme.listItemBackground};
    margin: 10px 0;
    padding: 5px;
    border-radius: 10px;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.titleColor};
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  h3,
  p {
    color: ${(props) => props.theme.listItem};
    margin: 5px 5px;
  }

  .done {
    text-decoration: line-through;
    color: ${(props) => props.theme.listItemDone};
    text-decoration-thickness: 3px;
  }

  p {
    font-size: 10px;
  }

  input :checked {
    background-color: #2196f3;
  }
`;

const CheckedInput = styled.input`
  border: 1px solid ${(props) => props.theme.buttonBackground};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  background-color: white;
  margin: 3px;
`;

const EditInput = styled.input`
  width: 80%;
  height: 15px;
  padding: 10px;
  border: 1px solid #dfdfdf;
`;

const Buttons = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.listItemBackground};
  border: none;
  border-radius: 50%;
  font-weight: bold;
  width: 25px;
  height: 25px;
  padding: 5px;

  hover {
    cursor: pointer;
    color: white;
    transition: 0.1s;
  }
`;

const Editbtn = styled.button`
  width: 50px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.listItemBackground};
  border: none;
  border-radius: 10%;
  font-weight: bold;
  padding: 5px;
  margin-right: 2px;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  console.log(items);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedInput, setEditedInput] = useState("");

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.detleteTodo(id));
  };

  const onUpdateTodo = () => {
    dispatch(todos.actions.updateTodo(editedInput));
    setEditedInput("");
  };

  return (
    <ListItems>
      {items
        .filter((item) => !item.isComplete)
        .map((item) => (
          <div key={item.id}>
            <section>
              <label>
                <h3 className={item.isComplete ? "done" : "not-done"}>
                  {item.text}
                </h3>

                <CheckedInput
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
              </label>
            </section>
            <section>
              <div>
                <p>Added: {moment(item.added).fromNow()}</p>
              </div>
              <div>
                <Editbtn onClick={() => setIsEditOpen(!isEditOpen)}>
                  Edit
                </Editbtn>
                <Buttons onClick={() => onDeleteTodo(item.id)}>X</Buttons>
              </div>
            </section>
            {isEditOpen && (
              <>
                <p>Edit your todo</p>
                <EditInput
                  type="text"
                  value={editedInput}
                  placeholder={item.text}
                  onChange={(e) => setEditedInput(e.target.value)}
                />
                <button onClick={() => setIsEditOpen(!isEditOpen)}>
                  close
                </button>
                <button onClick={() => onUpdateTodo(editedInput)}>save</button>
              </>
            )}
          </div>
        ))}
      {items
        .filter((item) => item.isComplete)
        .map((item) => (
          <div key={item.id}>
            <section>
              <label>
                <h3 className={item.isComplete ? "done" : "not-done"}>
                  {item.text}
                </h3>

                <CheckedInput
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
              </label>
            </section>
            <section>
              <div>
                <p>Added: {moment(item.added).fromNow()}</p>
              </div>
              <div>
                {/* <Editbtn onClick={() => setIsEditOpen(!isEditOpen)}>
                  Edit
                </Editbtn> */}
                <Buttons onClick={() => onDeleteTodo(item.id)}>X</Buttons>
              </div>
            </section>
            {/* {isEditOpen && (
              <>
                <p>Edit your todo</p>
                <EditInput
                  type="text"
                  value={editedInput}
                  placeholder={item.text}
                  onChange={(e) => setEditedInput(e.target.value)}
                />
                <button onClick={() => setIsEditOpen(!isEditOpen)}>
                  close
                </button>
                <button onClick={() => onUpdateTodo(editedInput)}>save</button>
              </>
            )} */}
          </div>
        ))}
    </ListItems>
  );
};

export default TodoList;
