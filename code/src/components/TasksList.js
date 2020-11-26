import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {ItemAdded} from './ItemAdded'
import {tasks} from 'reducers/tasks'


export const TasksList = () => {
	const dispatch = useDispatch()
	const items = useSelector((store) => store.tasks.items)

return (
	<ListContainer>
	{items.map((item, index)=> (
	<ItemAdded key={index} item={item}></ItemAdded>
	))}
	<ListActionButton onClick={() => dispatch(tasks.actions.removeOne())}>remove one</ListActionButton>
	</ListContainer>
)
}