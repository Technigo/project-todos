import React from 'react'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CounterTask = styled.p`
	font-family: 'Imprima';
	color: var(--clr-secondary);
	font-weight: 300;
	align-self: flex-start;
	max-width: 33ch;
	margin: 0.5em 1.5em 1.5em;
`

const TaskCounter = () => {
	const items = useSelector((store) => store.todo.items)

	const tasksDone = items.filter((item) => (item = item.isCompleted))

	const showTasksDone = (items) => {
		if (items.length > 0) {
			if (items.length === tasksDone.length) {
				return 'Well done! All tasks are done. Take a well deserved break or add more tasks'
			} else {
				return `TODO: ${tasksDone.length} of ${items.length} done`
			}
		} else {
			return `Let's get started by adding some tasks!`
		}
	}

	return <CounterTask>{showTasksDone(items)}</CounterTask>
}

export default TaskCounter
