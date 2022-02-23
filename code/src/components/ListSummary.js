import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components/macro'; 

//styling
const CompletedText = styled.p`
  font-size: 15px;
  padding: 5px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const ListSummary =() =>{
	const items = useSelector(store => store.todos.items);

  const itemsCompleted= useSelector(store => store.todos.items.filter(item => item.isComplete))
  
    return(
        
<CompletedText>      
            You have Complete  {itemsCompleted.length}/ of total Tasks {items.length}
</CompletedText>
    );
};
export default ListSummary;