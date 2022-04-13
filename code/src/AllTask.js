import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "Header";
import tasks from "reducers/tasks";


const AllTask = () => {
    
    const [input, setInput] = useState('');
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    const taskList = useSelector(state => state.tasks.list);
    const dispatch = useDispatch();
    
    const editItem = (id) => {
        navigate('/add-task');
        dispatch(tasks.actions.editItem(id));
        setEdit(true)
    }

 
    
        return (
        <div>
            <Header header='📝 All tasks' />

            <ul>
                {taskList.map(item => {
                
                return <li key={item.id}>
                    <span> {item.complete ? 'complete' : 'uncomplete'} </span>
                    <p> {item.text}  </p>
                    <button type="button" onClick={() => editItem(item.id)}>edit</button>
                    
                    </li>
                
                })}
            </ul>
        </div>
    )
}

export default AllTask