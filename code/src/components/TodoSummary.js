import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";

const TodoSummarySection = styled.section`
	display:flex;
	justify-content: center;
	margin: 10px 0;
`;

const FinishedTodoDiv = styled.div`
	width: 130px;
	height: 130px;
	line-height: 130px;
	border-radius: 50%;
	font-size: 14px;
	color: #fff;
	text-align: center;
	background: #000
`

const TodoSummary = () => {
	const items = useSelector((store) => store.todos.items);
	
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodo = items.filter((item) => item.isComplete).length;

	return (
		<TodoSummarySection>
			<FinishedTodoDiv>
				{finishedTodo} of {items.length} done!
			</FinishedTodoDiv>
		</TodoSummarySection>
	)
};

export default TodoSummary; 