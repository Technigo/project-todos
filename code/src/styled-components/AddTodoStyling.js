import styled from "styled-components";

export const AddTodoContainer = styled.section`
	text-align: center;
	margin: 10px auto;
	gap:10px;
`; 

export const Input = styled.input`
	border: none;
	margin: 20px auto;
	padding: 10px;
	background-color: transparent;
	border-bottom: 1px solid rgb(170, 170, 170);
	font-size: 18px;

	::placeholder {
		font-family: "Roboto",-apple-system;
	}
`;

export const AddButton = styled.button`
	width: 50px;
	height: 40px;
	border: none;
	background-color: green;
	color: white;
	border-radius: 5px;
	padding: 10px;
	font-size: 20px;
	margin-top: 20px;
`;

export const Select = styled.select`
  width: 190px;
  height: 35px;
  color: black;
	border-radius: 5px;
	border: 1px solid rgb(170, 170, 170);

	option {
		color:gray;
	}
`;