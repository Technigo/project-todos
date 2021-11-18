import styled from 'styled-components';

export const ListSection = styled.section`
	padding: 10px;
	margin: 10px;
	background-color: rgb(192 192 192 / 54%);
	border-radius: 5px;

	h2 {
		text-align: center;
	}
`; 

export const TodoListDiv = styled.div`
	${props => props ? "complete" : ""};

	background-color: white;
	border-radius: 5px;
	margin-bottom: 10px;
	word-wrap: break-word;
	display:flex;
	justify-content: space-between;

	span {
		margin: 10px;
	}

	.complete {
	text-decoration: line-through;
	opacity: 0.7;
}
`;

export const ListDiv = styled.div`
	/*${props => props ? "complete" : ""};*/
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 10px;
	word-wrap: break-word;
	justify-content: space-between;

	.complete {
		text-decoration: line-through;
		opacity: 0.7;
	}
`;

/* lägg till något styling eller */ 
export const ButtonContainer = styled.div`

`;

/* combine those two in one*/
export const Button = styled.button`
	background-color: ${props => props.red ? "red" : "green"};
	border: none; 
	height: 40px;
	width: 50px;
	border-radius: 5px;
	margin: 5px;
	color: white;
	font-size: 20px;
`;

export const ButtonDelete = styled.button`
	background-color: red;
	border: none; 
	color: white;
	height: 50px;
	width: 60px;
	font-size: 20px;

`;

export const CategorySpan = styled.span`
	background-color: black;
	padding: 5px;
	border-radius: 5px;
	color: white;
	font-weight: bold;
`; 

export const TextSpan = styled.span`
	padding: 5px;
`; 
