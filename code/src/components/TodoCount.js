import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const TodoCount = () => {

 
  const TodoCount = useSelector((store) => store.todo.length);

  const TodoCountCompleted = useSelector((store) =>
    store.todo.filter((todos) => todos.completed === true).length
  );


 



  return (
    <>
      <Link to="top" smooth={true} duration={1000} className="Count___btn">
        <div className="CountDiv___btn">
          <button>
            {" "}
            <span>▲</span> Add Todo{" "}
          </button>
        </div>
      </Link>
      <section className="TodoCountContent" id="count">
        <p>Total todos: {TodoCount} </p>
        <p> Completed: {TodoCountCompleted} </p>
      </section>
    </>
  );
};

export default TodoCount;
