import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'

export const TimeStamp = (props) => {

  return (
    <TimeStampSection>
      {moment(props.createdAt).fromNow()}
    </TimeStampSection>
  )
}

const TimeStampSection = styled.text`
  color: grey;
  font-size: 12px;
  text-transform: lowercase;
  margin-left: 10px;
  margin-top: 26px;
`