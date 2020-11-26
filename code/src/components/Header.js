import React from 'react'
import moment from 'moment'

export const Header = () => {
	const currentDate = moment().format('dddd, MMM Do YYYY')
	const currentTime = moment().format('LT')

	return (
		<>
		<h4 className="taskDate"><p className="date">Today's date:</p>{currentDate}</h4> 
		<h4 className="taskTime"><p className="time">Current time:</p>{currentTime}</h4>
		</>
	)
}