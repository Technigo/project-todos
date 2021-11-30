import React from "react";

import { HeaderContainer, HeaderTitle, CategoryTitle, FilterButton, TitleContainer, CategoryContainer } from "./HeaderStyling";

const Header = ({ toDone, notDone, allTodos, setToDone, setNotDone, setAllTodos }) => {
  const showToDone = () => {
    setToDone(true);
    setNotDone(false);
    setAllTodos(false);
  };

  const showNotDone = () => {
    setToDone(false);
    setNotDone(true);
    setAllTodos(false);
  };

  const showAllTodos = () => {
    setToDone(false);
    setNotDone(false);
    setAllTodos(true);
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <HeaderTitle>Todo or not todo that is the question?</HeaderTitle>
      </TitleContainer>
      <CategoryContainer>
        <CategoryTitle>List of todos</CategoryTitle>
        <buttoncontainer>
          <FilterButton active={toDone} onClick={showToDone}>
            ToDone
          </FilterButton>
          <FilterButton active={notDone} onClick={showNotDone}>
            NotDone
          </FilterButton>
          <FilterButton active={allTodos} onClick={showAllTodos}>
            AllTodos
          </FilterButton>
        </buttoncontainer>
      </CategoryContainer>
    </HeaderContainer>
  );
};

export default Header;
