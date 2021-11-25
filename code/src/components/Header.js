import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import todos from "../reducers/todos";
import styled from "styled-components/macro";
import AddTodo from "./AddTodo";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.todos.items.length);
  const donetask = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete === true)
  );

  const Header = styled.section`
    background: rgba(255, 255, 255, 0.6);
    transition: 0.5s ease;
    justify-content: space-evenly;
    margin-bottom: 20px;
  `;
  const HeaderTitle = styled.h2`
    text-align: center;
    color: rgb(109, 100, 100);
    padding-top: 20px;
    font-weight: bolder;
    font-family: "Baloo 2", cursive;
    @media (min-width: 768px) {
      font-size: 45px;
    }
  `;
  const HeaderWrapper = styled.div`
    color: white;
    border-radius: 2px;
    margin: 0px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `;

  const Container2 = styled.div`
    color: white;
    border-radius: 2px;
    margin: 0px auto;
    display: flex;

    text-align: center;
    padding-bottom: 15px;
  `;

  const ItemLength = styled.div`
    font-family: "Baloo 2", cursive;
    color: rgb(109, 100, 100);
    @media (min-width: 768px) {
      font-weight: 60px;
      margin-bottom: 20px;
    }
  `;
  const TodoWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
  `;

  const DoneAllButton = styled.button`
    color: grey;
    background: rgba(233, 181, 181, 0.6);
    padding: 10px;
    border-radius: 50px;
    justify-content: space-around;
    font-family: "Baloo 2", cursive;
    border: none;
    @media (min-width: 768px) {
      font-size: 25px;
      padding: 20px;
    }
  `;

  const Button2Wrapper = styled.div`
    gap:5px;
    display flex;
    flex-direction:row;
    transition: 0.5s ease;
    border: none;
  `;
  const Button2 = styled.button`
    color: grey;
    background: rgba(233, 181, 181, 0.6);
    padding: 10px;
    border-radius: 50px;
    justify-content: space-evenly;
    font-family: "Baloo 2", cursive;
    border: none;
  `;
  const Button3 = styled.button`
    color: grey;
    background: rgba(233, 181, 181, 0.6);
    padding: 10px;
    border-radius: 50px;
    justify-content: space-evenly;
    font-family: "Baloo 2", cursive;
    border: none;
  `;

  const Button4 = styled.button`
    color: grey;
    background: rgba(233, 181, 181, 0.6);
    padding: 10px;
    border-radius: 50px;
    justify-content: space-evenly;
    font-family: "Baloo 2", cursive;
    border: none;
  `;

  return (
    <Header>
      <HeaderTitle>
        {" "}
        To do's
        <ItemLength>
          {donetask.length} out of {counter} tasks done{" "}
        </ItemLength>
        <ItemLength>{moment().format("dddd Do MMMM")}</ItemLength>
      </HeaderTitle>
      <HeaderWrapper>
        <Container2>
          <>
            {visible ? (
              <>
                <TodoWrapper>
                  <DoneAllButton
                    onClick={() =>
                      dispatch(todos.actions.youAreAlldone(), setVisible())
                    }
                  >
                    {" "}
                    I am all <br></br> done!{" "}
                  </DoneAllButton>
                </TodoWrapper>
              </>
            ) : (
              <Button2Wrapper>
                <Button2
                  onClick={() => dispatch(todos.actions.removeComplete())}
                >
                  Make a new list!
                </Button2>
                <Button3 onClick={() => dispatch(todos.actions.resetAll())}>
                  Regret your done
                </Button3>

                <Button4
                  onClick={() =>
                    dispatch(todos.actions.youAreAlldone(), setVisible())
                  }
                >
                  {" "}
                  I am all done!{" "}
                </Button4>
              </Button2Wrapper>
            )}
          </>
        </Container2>
      </HeaderWrapper>
      <AddTodo />
    </Header>
  );
};

export default Header;
