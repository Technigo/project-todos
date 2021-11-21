import React from "react";
import close from "../assets/close.svg";
import styled from "styled-components";

const Cross = styled.img`
	padding: 3px;
`;
export const CloseIcon = () => {
	return <Cross src={close} alt="delete icon" />;
};
