import React from 'react'
import styled from 'styled-components'

const Today = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()
  if (dd < 10) { dd = 0+dd}
  if (mm < 10) {mm = 0+mm}
  today = dd +'/'+dd+'/'+yyyy

  return (
    <TodaySection>
      <TodayStyle>Today</TodayStyle>
      <Day>{today}</Day>
    </TodaySection>
    )
}

const TodaySection = styled.div`
  display: flex;
  flex-direction: column;
`
const TodayStyle = styled.p`
  color: #a8dadc;  
  margin: 0;
  font-weight: 600;
`
const Day = styled.p` 
  margin-top: 10px;
`
 
export default Today