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
