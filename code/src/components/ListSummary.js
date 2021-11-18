import React from "react";
import { useSelector } from "react-redux";

const ListSummary =()=>{
	const items = useSelector((store) => store.todos.items);
    const itemsCompleted = items.filter(
				(item) => item.isComplete
			);
    return(
        
            <h2>{itemsCompleted.length}/{items.length}</h2>
        
    );
}
export default ListSummary;