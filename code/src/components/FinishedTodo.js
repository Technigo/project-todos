import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';


import { ListSection, ListDiv } from '../styled-components/ListStyle';


const FinishedTodo = () => {
	const items = useSelector((store) => store.todos.items);
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodo = items.filter((item) => item.isComplete).sort((item) =>
	item.isComplete);
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodoLength = items.filter((item) => item.isComplete).length;

	return (
		<ListSection>
			<h2>
				<i className="fas fa-check-square"></i> {finishedTodoLength} of {items.length} is done!
			</h2>
			{finishedTodo.map(item => (
				// if item isComplete true it will dispaly line thought the text 
				<ListDiv key={item.id} className={`${item.isComplete ? "complete" : ""}`}>
					{item.text}, {moment(item.createdAt).fromNow()}
				</ListDiv>
			))}
		</ListSection>
	)
};

export default FinishedTodo; 