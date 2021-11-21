import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'; 

const CompletedText = styled.p`
  font-size: 15px;
  border: 10px solid, black; 
  padding: 8px;
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
        
<CompletedText>      
            <p>You have Complete  {itemsCompleted.length}/ of total Tasks {items.length}</p>
        </CompletedText>
    );
}
export default ListSummary;