import React from 'react';

export const TaskItem = ({ tasks }) => {
    return (
        <article>
            <p>{tasks.text}</p>
        </article>
    );
};