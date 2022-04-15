import React from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import todo from '../reducers/todo'

const CheckedButton = styled.button`
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

const CompleteAll = () => {
	const dispatch = useDispatch()

	const onCompleteAll = () => {
		dispatch(todo.actions.completeAll())
	}

	return <CheckedButton onClick={onCompleteAll}>check all</CheckedButton>
}

export default CompleteAll
