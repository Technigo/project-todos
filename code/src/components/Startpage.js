import React, { useState } from "react";

import Addtasks from "./Addtasks";

const Startpage = () => {
  const [start, setStart] = useState(false);
  const onStart = () => {
    setStart(true);
  };
  if (start) {
    return <Addtasks />;
  } else {
    return (
      <div>
        <h1>Welcome to ToDo-APP</h1>
        <h3>Makes your life easier</h3>
        <button onClick={onStart}>Let's get started</button>
      </div>
    );
  }
};

export default Startpage;
