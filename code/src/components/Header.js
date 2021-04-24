import React from 'react';





//This component shows the app header and the tasks to be completed
//Accesses the global state and gets the complete current to do list. Then, filters out the
//tasks in that list with property complete: false and returns the length of that array
export const Header = () => {

  
  

 
  return (
    <div className="header">
      <h1 className="app-title">MY TODOs APP</h1>
    </div>
  )
};


