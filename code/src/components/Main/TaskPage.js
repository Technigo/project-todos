import React from "react";

import { Header } from "../Header/Header";
import { FormDrawer } from "../TaskForm/FormDrawer";
import { TaskList } from "../TaskList/TaskList";
import { Main } from "../../styledcomponents/StyledMain";


export const TaskPage = () => {
  return (
    <Main>
      <Header />
      <FormDrawer />
      <TaskList />
    </Main>
  )
};