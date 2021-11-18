import React from 'react';
import { useSelector } from 'react-redux';

// STYLE & IMAGES
import { ListSection, ListDiv } from '../styled-components/ListStyle';

// COMPONENTS 
import NoTodos from '../components/NoTodos'


const FinishedTodo = () => {
	const items = useSelector((store) => store.todos.items);
	// filtering the array to find all tasks that is completed
	// and then reverse so the last task will be at the top of the list  
	const finishedTodo = items.filter((item) => item.isComplete).reverse();
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodoLength = items.filter((item) => item.isComplete).length;

	if (items.length === 0) {
		return (
		  <NoTodos  />
		);
	  }

	return (
		<ListSection>
			<h2>
				<i className="fas fa-check-square"></i> {finishedTodoLength} of {items.length} is done!
			</h2>
			{finishedTodo.map(item => (
				// if item isComplete true it will dispaly line thought the text 
				<ListDiv key={item.id} className={`${item.isComplete ? "complete" : ""}`}>
					{item.text}
				</ListDiv>
			))}
		</ListSection>
	)
};

export default FinishedTodo; 