import React from 'react'
import {useSelector} from 'react-redux'

import {Item} from 'components/Item'

export const HouseholdTasks = () => {
	const tasksHome = useSelector((store) => store.tasks);
	const houseTasks = tasksHome.items.filter((item) => item.category === "Household");
	
	return (
	  <>
	  <h2>Household</h2>
		{houseTasks.map((item) => (
		  <Item key={item.id} listItem={item} />
		))}
		</>
	)
	}