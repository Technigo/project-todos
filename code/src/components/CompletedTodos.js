import React from "react";
import {  useSelector, useDispatch } from 'react-redux'


const Completed = (item, index) => {

    	const items = useSelector((store) => store.todos.items);

	const dispatch = useDispatch();

    return (
        <div>hello</div>
    )

}


export default Completed;