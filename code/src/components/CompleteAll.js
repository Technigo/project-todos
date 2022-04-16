import React from 'react'

import { useDispatch } from 'react-redux'
import { CheckedButton } from '../components/Styling'
import todo from '../reducers/todo'

const CompleteAll = () => {
	const dispatch = useDispatch()

	const onCompleteAll = () => {
		dispatch(todo.actions.completeAll())
	}

	return <CheckedButton onClick={onCompleteAll}>check all</CheckedButton>
}

export default CompleteAll
