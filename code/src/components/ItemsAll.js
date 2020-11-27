import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {tasks} from 'reducers/tasks'

import styled from 'styled-components'

export const ItemsAll = ({taskIndex}) => {
	const dispatch = useDispatch()
	const task = useSelector((store) => store.tasks.list.tasks[taskIndex])

	const handleRemove = () => {
		dispatch(
			tasks.actions.taskRemoved({
				taskIndex,
			})
		)
	}

	const handleCheckbox = () => {
		dispatch(
			tasks.actions.checkTodoTask({
				taskIndex: taskIndex,
				complete: !task.complete
			})
		)
	}
	return (
		<TaskList>
			<div className="taskByTask">
				<label className="checkBox">
					<input type="checkbox"
						className="checkBox"
						checked={task.complete?'checked':''}
						onChange={handleCheckbox}/>
				</label>

				<TaskChecked>
					<div className="timeAndCheck">
					<p className={task.complete===true?
					"taskCheck check" : "taskCheck"}>∘ {task.text}
					</p>
				</div>
				</TaskChecked>
				
				<ButtonX type="button"
				className="taskRemoved"
				onClick={handleRemove}>X
				</ButtonX>
			</div>
			</TaskList>
	)
}

export const TaskList = styled.div`
	display:flex;
	flex-direction:row;
	border-bottom:1px solid #b39adb;
	background-color:#fcfcfc;
	margin-top:5px;
	padding:2px;
`;
export const TaskChecked = styled.div`
	display:inline;
	flex-direction:row;
	font-family:'Menlo';
`;
export const ButtonX = styled.button`
	background-color:#df92a3;
	text-decoration:none;
	border:2px solid #df92a3;
	color:white;
	font-weight:bold;
	display:block;
`;