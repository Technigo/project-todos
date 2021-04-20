import React from "react";

import './SelectDeadlineStyle.css'

export const SelectDeadline = ({setDueTime}) => {
    const moment = require("moment");
    const initialTime = moment().format("YYYY-MM-DD")
    return (
        <input type="date" id="deadline" name="deadline"
        value={initialTime}
        min={initialTime} max="2025-01-01"
        onChange={(e) => setDueTime(e.target.value)}/>
    )
}