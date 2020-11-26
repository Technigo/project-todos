import React from 'react'
import moment from 'moment'

export const Header = () => {
	const currentTime = moment().format('HH:MM / D/M')

	return (
		<>
		<h4 className="taskTime">
		{currentTime}</h4>
		</>
	)
}