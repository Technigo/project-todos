import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import "./RadioButtonsStyle.css";


export const RadioButtons = () => {

return (<div className="radio-button">
<div className="radio-button__no-deadlinne">
  <input type="radio" name="radio" id="no-deadline" />
  <label htmlFor="no-deadline">Infinite</label>
</div>
<div className="radio-button__deadlinne">
  <input type="radio" name="radio" id="deadline" />
  <label htmlFor="deadline">Set deadline</label>
</div>
</div>)
}