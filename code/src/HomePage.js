import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {

    return (
        <main>
            <h1>Dome</h1>
            <ul>
                <Link to='today-task'><li><span role='img'aria-hidden="true" >☀️ </span> Today</li></Link>
                <Link to='projects'><li><span role='img'aria-hidden="true" >🗂 </span> Projects</li></Link>
                <Link to='complete'><li><span role='img'aria-hidden="true" >✅ </span>Complete</li></Link>
                <Link to='uncomplete'><li><span role='img'aria-hidden="true" >🚨 </span> Uncomplete</li></Link>
                <Link to='all'><li><span role='img'aria-hidden="true" >📝 </span>All tasks</li></Link>
            </ul>
            
        </main>
    )
}

export default HomePage