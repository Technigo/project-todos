import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, 
    ListItem, 
    ListItemText,
    Input,
    Divider, 
    Button } 
    from "@material-ui/core";

import { tasks } from "reducers/tasks";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(tasks.actions.addTask(value));
  };

  return (
      <>
    <ListItem>
      <TextField
        type="text"
        variant='standard'
        name="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Add Task'
        InputProps={{ disableUnderline: true }}
        fullWidth
      />
      <Button
      variant='contained'
      onClick={handleSubmit}>Add</Button>
    </ListItem>
    <Divider/>
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
