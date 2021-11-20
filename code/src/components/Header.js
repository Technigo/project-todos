import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import todos from "../reducers/todos";
import styled from "styled-components";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const items = useSelector((store) => store.todos.items);
  const completedTodos = items.filter((todo) => todo.isComplete);
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.todos.items.length);
  const donetask = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete === true)
  );

  const Header = styled.section`
    background: rgba(255, 255, 255, 0.6);
    transition: 0.5s ease;
    justify-content: space-evenly;
    height: 120 px;
    margin-bottom: 20px;
  `;
  const HeaderTitle = styled.h2`
    text-align: center;
    color: rgb(109, 100, 100);
    padding-top: 20px;
    font-weight: bolder;
    font-family: "Baloo 2", cursive;
  `;
  const HeaderWrapper = styled.div`
    color: white;
    border-radius: 2px;
    margin: 0px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `;
  const Container1 = styled.div`
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
    flex-direction: colum;
    text-align: center;
    padding-bottom: 15px;
  `;

  const ItemLength = styled.div`
  fonst-size:10px
  font-weight:500;
  font-family: "Baloo 2", cursive;
  color: rgb(109, 100, 100);
  `;
  const DoneAllButton = styled.button`
    color: grey;
    background: rgba(233, 181, 181, 0.6);
    padding: 10px;
    border-radius: 50px;
    margin: 10pxpx;
    justify-content: space-around;
    font-family: "Baloo 2", cursive;
    border: none;
  `;

  const Button2Wrapper = styled.div`
    gap:5px;
    display flex;
    flex-direction:row;
    margin 10px;
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
        <Container1> </Container1>
        <Container2>
          <>
            {visible ? (
              <DoneAllButton
                onClick={() =>
                  dispatch(todos.actions.youAreAlldone(), setVisible())
                }
              >
                {" "}
                I am all done!{" "}
              </DoneAllButton>
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
    </Header>
  );
};

export default Header;
