import React from "react";
import styled from 'styled-components'

export const DeadlineCountdown = ({deadline}) => {
const moment = require("moment");
const today = moment();
const duedate = moment(deadline);
const diff = moment(duedate).diff(today)

if(deadline===""){
    return <p></p>
}
if(diff > 100000000 ){
    return <Text textColor="green"> {moment(duedate).diff(today, 'days')} days left</Text>
}else if(diff > 10000000) {
    return <Text textColor="orange"> {moment(duedate).diff(today, 'hours')} hours left</Text>
}
return (
<Text textColor="red"> due now!</Text>
)
}

const Text = styled.p`
color: ${props => props.textColor}
`