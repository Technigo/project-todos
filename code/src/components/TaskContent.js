import React from 'react'

import {Header} from './Header'
import {ItemAdded} from './ItemAdded'
import {ItemList} from './ItemList'
import {ItemRemoved} from './ItemRemoved'

export const TaskContent = () => {
	return (
		<main className="taskContent">
			<Header/>
			<ItemAdded/>
			<ItemList/>
			<ItemRemoved/>
		</main>
	)
}