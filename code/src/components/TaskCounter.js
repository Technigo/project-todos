import React from 'react'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CounterTask = styled.p`
	font-family: 'Imprima';
	color: var(--clr-main);
	font-weight: 300;
	align-self: flex-start;
	padding: 0.25em 0.5em;
	background: var(--clr-accent);
	max-width: 33ch;
	margin: 0.5em;
`

const TaskCounter = () => {
	const items = useSelector((store) => store.todo.items)

	const tasksDone = items.filter((item) => (item = item.isCompleted))

	const showTasksDone = (items) => {
		if (items.length > 0) {
			if (items.length === tasksDone.length) {
				if (items.length > 1) {
					return `Well done! ${tasksDone.length} of ${items.length} tasks are checked. Take a well deserved break or add some new tasks.`
				} else {
					return `Well done! ${tasksDone.length} of ${items.length} task are checked. Take a well deserved break or add a new task.`
				}
			} else {
				return `TODO: ${tasksDone.length} OF ${items.length} DONE`
			}
		} else {
			return `Let's get started by adding some tasks! ☝️`
		}
	}

	return <CounterTask>{showTasksDone(items)}</CounterTask>
}

export default TaskCounter
