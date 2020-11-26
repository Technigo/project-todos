import React from 'react'
import moment from 'moment'

export const Header = () => {
	const currentDate = moment().format('dddd, MMM Do')
	const currentTime = moment().format('LT')

	return (
		<div className="header">
		<h2>MY TASKS</h2>
		<p className="date-n-time">{currentDate} at {currentTime}</p>
		</div>
	)
}