import React from "react";
import styled from "styled-components";

import { Counter } from "./Counter";

const HeaderSection = styled.header`
	background-color: #ffffff;
	padding: 30px 20px;
	border-bottom: 1px solid #e8e8e8;
`;

const Heading = styled.h1`
	font-size: 26px;
	margin-bottom: 5px;
`;

const CompleteButton = styled.button`
	background-color: #ffffff;
	color: #60c57f;
	padding: 4px 8px;
	border: solid 1px #60c57f;
	border-radius: 100px;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	&:hover {
		background-color: #60c57f;
		color: #ffffff;
	}
`;

export const Header = () => {
	return (
		<HeaderSection>
			<div>
				<Heading>To do list</Heading>
				<CompleteButton>Clear all</CompleteButton>
			</div>
			<Counter />
		</HeaderSection>
	);
};

// Grey colors:
// #e8e8e8
// #c4cbd1
// #f5f5f7
// #f1f4f7
// #222221
// #2e2e2d
// #f5f5f5
// #e1e1e1
