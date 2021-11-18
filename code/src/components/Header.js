import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const completeCount = useSelector(
        (state) => state.todos.items.filter((item) => item.isComplete).length
    );
    const incompleteCount = useSelector(
        (state) => state.todos.items.filter((item) => !item.isComplete).length
    );

    return (
        <header>
            <div>
                <h1>My To-Dos</h1>
                <p></p>
            </div>
            <div>
                <p>Incomplete: {incompleteCount}</p>
                <p>Finished: {completeCount}</p>
            </div>
        </header>
    );
};

export default Header;
