import React from 'react'

import {Header} from './Header'
import {ItemAdded} from './ItemAdded'
import {ItemList} from './ItemList'
import {ItemRemoved} from './ItemRemoved'

import './style/task-content.css'
import './style/task-foundation.css'


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