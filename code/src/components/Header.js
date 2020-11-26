import React from 'react'
import moment from 'moment'

export const Header = () => {
	const currentDate = moment().format('dddd, MMM Do YYYY')
	const currentTime = moment().format('LT')

	return (
		<>
		<h4 className="taskDate">Today's date:{currentDate}</h4> 
		<h4 className="taskTime">Current time:{currentTime}</h4>
		</>
	)
}