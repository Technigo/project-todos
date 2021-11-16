import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";

const FinishedTodosContainer = styled.section`
	background-color: rgb(202, 202, 202);
	padding: 0 10px;
`;

const TextContainer = styled.div`
	background-color: white;
	border-radius: 5px;
`;

const Text = styled.p`
	padding:10px;
`;


const FinishedTodo = () => {
	const items = useSelector((store) => store.todos.items);
	// filtering the array to fins all tasks that is completed, and then 
	const finishedTodo = items.filter((item) => item.isComplete);

	return (
		<FinishedTodosContainer>
			<h2>
				<i className="fas fa-check-square"></i> Done!
			</h2>
			{finishedTodo.map(item => (
				// if item isComplete true it will dispaly line thought the text 
				<TextContainer key={item.id} className={`${item.isComplete ? "complete" : ""}`}>
					<Text>{item.text}</Text>
				</TextContainer>
			))}
		</FinishedTodosContainer>
	)
};

export default FinishedTodo; 