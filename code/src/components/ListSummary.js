import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'; 

const CompletedText = styled.p`
  font-size: 10px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const ListSummary =()=>{
	const items = useSelector((store) => store.todos.items);
    const itemsCompleted = items.filter(
				(item) => item.isComplete
			);
    return(
        
            <p>Complete {itemsCompleted.length}/Sum of all tasks{items.length}</p>
        
    );
}
export default ListSummary;