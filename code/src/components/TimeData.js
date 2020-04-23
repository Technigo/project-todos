import React from "react"
import styled from 'styled-components'
import Moment from 'react-moment'
import moment from "moment"

const TimeStamp = styled.p`
  font-size: 12px;
  margin: 2px;
`

export const TimeData = ({ ...item }) => {

    const checkTimeLeft = (item) => {
        if (!item.dueDate) {
            return
        } else if (item.dueDate) {
            const due = moment(item.dueDate);
            const timeDiff = moment(due.diff(Date.now()))
            const duration = moment.duration(timeDiff._i)
            if (duration._data.days >= 7 || duration._data.years) {
                return `Due: ${item.dueDate}`
            } else if (duration._data.days < 0 || duration._data.hours < 0 || duration._data.minutes < 0) {
                if (duration._data.days) {
                    return `Due ${duration._data.days.toString().substr(1)} days ago`
                } else {
                    return `Due ${duration._data.hours.toString().substr(1)} hours ago`
                }
            } else if (duration._data.days < 7 && duration._data.days !== 0) {
                return `Due in ${duration._data.days} days`
            } else if (duration._data.days === 0) {
                return `Due in ${duration._data.hours} hours`
            } else if (duration._data.days === 0 && duration._data.hours === 0) {
                return `Due in ${duration._data.minutes}} minutes`
            }
        }
    }

    const timeLeftColor = (item) => {
        const due = moment(item.dueDate);
        const timeDiff = moment(due.diff(Date.now()))
        const duration = moment.duration(timeDiff._i)
        if (duration._data.days === 0 && duration._data.hours < 6 || duration._data.days < 0 || duration._data.hours < 0 || duration._data.minutes < 0) {
            return "red"
        } else if (duration._data.days === 0) {
            return "orange"
        } else {
            return "#a3a3a3"
        }
    }

    return (
        <>
            <TimeStamp>posted
                <Moment fromNow>{new Date(item.created)}</Moment>
            </TimeStamp>
            {item.dueDate && !item.done &&
                <TimeStamp style={{ color: timeLeftColor(item) }}>
                    {checkTimeLeft(item)}
                </TimeStamp>
            }
        </>
    )

}