import styled from 'styled-components'

export const ButtonSwitch = styled.button`
	position: absolute;
	top: 10px;
	right: 20px;
	background: var(--clr-accent);
	color: var(--clr-main);
	border: 1px solid var(--clr-accent);
	border-radius: 8px;
	padding: 0.25em 0.6em;
	font-family: inherit;

	@media (min-width: 667px) {
		right: 90px;
	}
`
export const HeaderContainer = styled.header`
	background: var(--clr-main);
	color: var(--clr-secondary);
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	border: 2px solid var(--clr-accent);
	border-bottom: none;
	display: flex;
	justify-content: center;
	padding-top: 2em;
`

export const StyledInput = styled.input`
	font-size: 16px;
	height: 30px;
	letter-spacing: 1.5px;
	color: var(--clr-secondary);
	text-align: center;
	width: 310px;
	border: none;
	border-bottom: 2px solid var(--clr-accent);
	background-color: var(--clr-main-opacity);
	margin-bottom: 1.5em;

	&:focus {
		border: 2px solid var(--clr-accent);
	}
`

export const AddBtn = styled.button`
	background: transparent;
	padding: 0;
	border: none;
	position: absolute;
	top: 6px;
	right: 6px;
	cursor: pointer;
`

export const AddPlus = styled.img`
	color: none;

	&:hover {
		transform: scale(1.2);
		transition: all 0.3s ease-in;
	}
`

export const CheckedButton = styled.button`
	font-family: inherit;
	background: var(--clr-accent);
	color: var(--clr-secondary);
	border: none;
	padding: 0.4em 1em;

	&:hover {
		transform: scale(1.1);
		transition: all 0.3s ease-in;
	}
`
