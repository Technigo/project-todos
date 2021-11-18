import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "reducers/todoData";
import { Link } from "react-scroll";
import video from "images/background.mp4"
const AddTodo = () => {
  const [addTask, setAddTask] = useState("");
  const [addTitle, setAddTitle] = useState("");

  const dispatch = useDispatch();

  const onSubmited = () => {
    if (addTitle === "" || addTask === "") {
    } else {
      dispatch(addTodo({ title: addTitle, task: addTask }));
      setAddTitle('')
      setAddTask('')
    }
  };


  document.ontouchmove = function (e) {
    e.preventDefault();
  }


  return (
    <article className="addTodoContainer" id="top" >
        <video id="background-video" autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>

      <section className="addTodoContent">
        
        <section className="addTodo___text">
       
          <form>
            <label>
              {" "}
              Add title:
              <input
                className="titel"
                type="text"
                maxLength="25"
                value={addTitle}
                onChange={(e) => setAddTitle(e.target.value)}
              />
            </label>

            <label>
              {" "}
              Add a task:
              <textarea
                className="task"
                type="text"
                maxLength="150"
                value={addTask}
                onChange={(e) => setAddTask(e.target.value)}
              />
            </label>
          </form>

          <div className="addTodo___btn">
            <button
              className={
                addTitle === "" || addTask === "" ? "btnRed" : "btnGreen"
              }
              type="submit"
              onClick={onSubmited}
            >
              {" "}
              Add{" "}
            </button>
          </div>
           
        </section>
      </section>

      <Link
        to="count"
        smooth={true}
        duration={1000}
        className="seeAllTodo___btn"
      >
        <div className="seeAllTodoDiv___btn">
          <button>
            Todo´s <span>▼</span>{" "}
          </button>
        </div>
      </Link>
    </article>
  );
};

export default AddTodo;
