import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";

import todos from "../reducers/todos";
import { AddToDo } from "./AddToDo";

import { AddTaskButton } from "../styledcomponents/StyledButtons";
import { AddText, DrawerContainer, BottomContainer, } from "../styledcomponents/StyledForm";


export const FormDrawer= () => {
  const [openForm, setOpenForm] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
    
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(todos.actions.addTask({ task, category, dueDate }));
    setTask("");
    setCategory("");
    setDueDate(new Date());
    setOpenForm(false);
  };

  return (
    <>
      <BottomContainer>
        <AddTaskButton onClick={() => setOpenForm(true)}><AddText>+</AddText></AddTaskButton>
      </BottomContainer>
      <Drawer 
        anchor="bottom"
        open={openForm}         
        onClose={() => setOpenForm(false)}
        onOpen={() => setOpenForm(true)}>
        <DrawerContainer>
          <AddToDo
            onSubmit={onFormSubmit}
            handleSelectChange={category => setCategory(category.value)}
            handleDateChange={dueDate => setDueDate(dueDate)}
            handleInputChange={e => setTask(e.target.value)}
            category={category.value}
            dueDate={dueDate}
            task={task} />
        </DrawerContainer>
      </Drawer>
    </>
  )
};