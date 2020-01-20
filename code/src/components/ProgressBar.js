import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
    const todos = useSelector(store => store.todos);
    const total = todos.length;

    if (total > 0) {
        const completed = todos.filter(todo => todo.isCompleted).length;

        return (
            <div className="ProgressBar">
                {completed} of {total} done
      </div>
        );
    }

    return null;

};