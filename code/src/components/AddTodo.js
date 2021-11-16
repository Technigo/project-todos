import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "reducers/todoData";

const AddTodo = () => {






 
  const [addTask, setAddTask] = useState('');
  const [addTitel, setAddTitel] = useState('');

  const dispatch = useDispatch();

  const onSubmited = () => {
    
    if (addTitel === '' || addTask === '' )
    {
     
  }



else{
    dispatch(
     addTodo({titel:addTitel, task:addTask})

    )

    }



    
  
    }
  

  return (
     
    <article className="addTodoContainer" >
      <section className="addTodo___text">
      <form>
     <label> Add titel: </label>

        <input
          className="titel"
          type="text"
          value={addTitel}
          onChange={(e) => setAddTitel(e.target.value)}
        />

        <label>
          {" "}
          Add a task
          <input
            className="task"
            type="text"
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
          />
        </label>
        </form>
      </section>
      <div className="addTodo___btn" >
        <button className={addTitel === '' || addTask === '' ? "btnRed" : "btnGreen" } type="submit" onClick={onSubmited}>
          {" "}
          Add{" "}
        </button>
      </div>
    </article>
    
  );
};

export default AddTodo;
