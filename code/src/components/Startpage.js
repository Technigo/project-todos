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
      <div className="start-page">
        <h1>Welcome to ToDo-App</h1>
        <h3>Make your life easier</h3>
        <button onClick={onStart}>Let's start </button>
        <img src="./Assets/start-image.png" alt="start page" />
      </div>
    );
  }
};

export default Startpage;
