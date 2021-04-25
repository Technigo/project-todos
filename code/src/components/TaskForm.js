import React, { useState } from 'react';

const TaskForm = () => {
    const [value, setValue] = useState('');

    return (
        <form>
            <input 
                type="text"
                value={value}
                onChange={e => (e.target.value)}

            />
            <button type="submit">Add Task</button>
        </form>
    )
};

export default TaskForm;