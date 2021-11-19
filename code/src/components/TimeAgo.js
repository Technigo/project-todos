import React from "react"
import { toDate, formatDistanceToNow } from "date-fns"

export const TimeAgo = ({ createdAt }) => {
  let timeAgo = ""
  if (createdAt) {
    const date = toDate(createdAt)
    const timePeriod = formatDistanceToNow(new Date(date))
    timeAgo = `${timePeriod} ago`
  }
  return <div>{timeAgo}</div>
}
