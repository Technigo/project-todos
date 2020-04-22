import React from 'react';
import styled from 'styled-components';
// Section styling
export const StyledSection = styled.section`border-bottom: 3px solid white;`;

// Section Title
export const SectionHeader = styled.h2`
	width: ${(props) => props.width}px;
	color: black;
	text-align: center;
	padding: 16px 0;
`;
// text and labels
export const Paragraf = styled.p`
	color: white;
	font-size: 22px;
	font-weight: 100;
`;
// add and remove buttons
export const ColorButton = styled.button`
	box-shadow: none;
	font-size: 45px;
	color: ${(props) => props.color};
	background: none;
	border: none;
`;
