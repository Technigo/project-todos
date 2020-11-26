import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {tasks} from 'reducers/tasks'

export const ItemsAll = ({taskIndex}) => {
	const dispatch = useDispatch()
	const task = useSelector((store) => store.tasks.list.tasks[taskIndex])

	const handleRemove = (event) => {
		dispatch(
			tasks.actions.taskRemoved({
				taskIndex,
			})
		)
	}

	const handleCheckbox = (event) => {
		dispatch(
			tasks.actions.checkTodoTask({
				taskIndex:taskIndex,
				complete: !task.complete
			})
		)
	}

	return (
		<div className="tasksPoster">
			<div className="taskByTask">
				<label className="checkBox">
					<input type="checkbox"
						className="checkBox"
						checked={task.complete?'checked':''}
						onChange={handleCheckbox}/>
				</label>

				<div className="timeAndCheck">
					<p className={task.complete===true?
					"taskCheck check" : "taskCheck"}>
						{task.text}
					</p>
				</div>

				<button type="button"
				className="taskRemoved"
				onClick={handleRemove}>
					X
				</button>
			</div>

		</div>
	)
}