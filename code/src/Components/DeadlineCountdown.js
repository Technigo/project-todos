import React from "react";

import './DeadlineCountdownStyle.css'

export const DeadlineCountdown = ({deadline}) => {
const moment = require("moment");
const today = moment();
const duedate = moment(deadline);
const diff = moment(duedate).diff(today)

if(deadline===""){
    return <p></p>
}
if(diff > 100000000 ){
    return <p> {moment(duedate).diff(today, 'days')} days left</p>
}else if(diff > 10000000) {
    return <p> {moment(duedate).diff(today, 'hours')} hours left</p>
}
return (
<p className="warning"> due now!</p>
)
}