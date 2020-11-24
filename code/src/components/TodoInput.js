import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, 
    ListItem, 
    ListItemText,
    Input,
    Divider, 
    Button } 
    from "@material-ui/core";
import { Add, Description } from '@material-ui/icons';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';


import { tasks } from "reducers/tasks";

export const TodoInput = (props) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleDateChange = (date) => {
    setSelectedDate(date);}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tasks.actions.addTask({description, date:moment(selectedDate).calendar({
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
  })}));
    props.onClose()
  };

  return (
      <>
      <TextField
        type="text"
        variant='standard'
        name="name"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Add Task'
        InputProps={{ disableUnderline: true }}
        fullWidth
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
          disableToolbar
          variant="static"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <Button
      variant='contained'
      onClick={handleSubmit}>Add</Button>
      <Button
      variant='contained'
      onClick={() => dispatch(tasks.actions.removeAll())}>remove all</Button>
    </>
  );
};

// return (
//     <form onSubmit={handleSubmit}>
//       <TextField type="text" name="name" value={value} onChange={e => setValue(e.target.value)} />
//       <TextField type="submit" value="Submit" />
//     </form>
//   );
// };
