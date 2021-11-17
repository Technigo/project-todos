import styled from 'styled-components';

export const ListSection = styled.section`
	padding: 10px;
	margin: 10px;
	background-color: rgb(170, 170, 170);
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
export const ButtonDone = styled.button`
	background-color: green;
	border: none; 
	height: 40px;
	width: 50px;
	color: white;
	font-size: 20px;

	i:hover {
		width: 26px;
  		transform: scale(1.09);
	}
`;

export const ButtonDelete = styled.button`
	background-color: red;
	border: none; 
	color: white;
	height: 40px;
	width: 50px;
	font-size: 20px;

	i:hover {
		width: 26px;
  		transform: scale(1.09);
	}
`;
