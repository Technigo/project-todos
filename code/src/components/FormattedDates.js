import React from 'react'
import { formatRelative } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'

export const FormattedTimestamp = ({ todo }) => {

  const formatRelativeLocale = {
    lastWeek: "'last' eeee",
    yesterday: "'yesterday' BBBB",
    today: "'today' BBBB",
    tomorrow: "'tomorrow'",
    nextWeek: "'next' eeee",
    other: 'dd.MM.yyyy',
  }

  const locale = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocale[token],
  }

  const dateTimestamp = (new Date(todo.timestamp))
  const formattedTimestamp = formatRelative(dateTimestamp, new Date(), { locale })

  return <>{formattedTimestamp}</>
}

export const FormattedDeadline = ({ todo }) => {

  const formatRelativeLocale = {
    lastWeek: "'last' eeee",
    yesterday: "'yesterday'",
    today: "'today'",
    tomorrow: "'tomorrow'",
    nextWeek: "'next' eeee",
    other: 'dd.MM.yyyy',
  }

  const locale = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocale[token],
  }

  const dateDeadline = (new Date(todo.deadline))
  const formattedDeadline = formatRelative(dateDeadline, new Date(), { locale })

  return <>{formattedDeadline}</>
}

