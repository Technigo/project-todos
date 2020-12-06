import React from 'react';

import moment from 'moment';



const ToDoSummary = () => {
    const todoCount = items.length
    
    const numDone = items.filter(
        item => item.isCompleted).length;
        return (
            <>
        <span>You're doing great: {numDone}/{todoCount} stuff is done!</span>
        <span>Created: {moment(today).format('MMM Do YYYY')}</span>
        </>
        );
};

export default ToDoSummary;