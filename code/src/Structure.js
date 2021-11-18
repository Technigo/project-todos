import React, { useState, useEffect } from "react";

import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/styled/Header";
import { Footer } from "./components/styled/Footer";
import { InfoBoard } from "components/InfoBoard";
import { NavBoard } from "components/NavBoard";

import { AllTodoList } from "components/AllTodoList";
import { CustomizeBtn } from "components/styled/CustomizeBtn";
import { BackgroundContainer } from "components/BackgroundsContainer";
import { useSelector } from "react-redux";

export const Structure = () => {
  const [value, setValue] = useState("closed");
  const selectedBackground = useSelector((store) => store.custom.selectedBackground);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedBackground})`;
    console.log("use effect", selectedBackground);
  }, [selectedBackground]);

  const toggleDiv = () => {
    if (value === "open") {
      setValue("closed");
    }
    if (value === "closed") {
      setValue("open");
    }
  };

  return (
    <main>
      <Header height={100} width={100}>
        <CustomizeBtn onClick={toggleDiv} />
        {value === "open" ? <BackgroundContainer /> : null}
      </Header>
      <div className="main-grid">
        <div className="grid">
          <h1>todos</h1>
          <AddTodo />
          <NavBoard />
          <AllTodoList />
          <InfoBoard />
        </div>
      </div>
      <Footer height={50} width={100}>
        <p>
          created and developed by &#8203;
          <a className="link" href="https://mary-snopok.com" target="_blank" rel="noopener noreferrer">
            @marysnopok
          </a>
        </p>
      </Footer>
    </main>
  );
};
